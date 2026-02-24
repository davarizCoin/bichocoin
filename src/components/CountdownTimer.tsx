import { useState, useEffect } from "react";

export interface DrawTime {
  hour: number;
  minute: number;
}

export interface DrawSchedule {
  drawDays: number[];  // 0=Sun, 1=Mon, etc.
  drawTimes: DrawTime[]; // Multiple draws per day supported
}

export const gameSchedules: Record<string, DrawSchedule> = {
  quina: { drawDays: [1, 2, 3, 4, 5, 6], drawTimes: [{ hour: 21, minute: 0 }] },
  "mega-sena": { drawDays: [2, 4, 6], drawTimes: [{ hour: 21, minute: 0 }] },
  "dia-de-sorte": { drawDays: [2, 4, 6], drawTimes: [{ hour: 21, minute: 0 }] },
  "mais-milionaria": { drawDays: [3, 6], drawTimes: [{ hour: 21, minute: 0 }] },
  "mega-millions": { drawDays: [3, 6], drawTimes: [{ hour: 0, minute: 0 }] },
  powerball: { drawDays: [2, 4, 0], drawTimes: [{ hour: 0, minute: 59 }] },
  "lotto-america": { drawDays: [1, 3, 6], drawTimes: [{ hour: 0, minute: 0 }] },
  "2by2": { drawDays: [0, 1, 2, 3, 4, 5, 6], drawTimes: [{ hour: 0, minute: 0 }] },
  "bicho-dc4": { drawDays: [0, 1, 2, 3, 4, 5, 6], drawTimes: [{ hour: 13, minute: 50 }, { hour: 19, minute: 50 }, { hour: 23, minute: 30 }] },
};

export const useBettingStatus = (schedule: DrawSchedule) => {
  const [bettingOpen, setBettingOpen] = useState(true);

  useEffect(() => {
    const check = () => {
      const now = getBrasiliaTime();
      const day = now.getDay();
      const mins = now.getHours() * 60 + now.getMinutes();

      if (schedule.drawDays.includes(day)) {
        for (const draw of schedule.drawTimes) {
          const drawMins = draw.hour * 60 + draw.minute;
          const closeMins = drawMins - 30;
          const reopenMins = drawMins + 120; // 2h locked

          if (mins >= closeMins && mins < reopenMins) {
            setBettingOpen(false);
            return;
          }
        }
      }
      setBettingOpen(true);
    };
    check();
    const interval = setInterval(check, 10000);
    return () => clearInterval(interval);
  }, [schedule]);

  return { bettingOpen };
};

function getBrasiliaTime(): Date {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc - 3 * 3600000);
}

const DAY_NAMES = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MONTH_SHORT = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

interface Props {
  schedule: DrawSchedule;
}

const CountdownTimer = ({ schedule }: Props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [closed, setClosed] = useState(false);
  const [nextDrawDate, setNextDrawDate] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = getBrasiliaTime();
      const day = now.getDay();
      const mins = now.getHours() * 60 + now.getMinutes();

      let isAnyClosed = false;

      if (schedule.drawDays.includes(day)) {
        for (const draw of schedule.drawTimes) {
          const drawMins = draw.hour * 60 + draw.minute;
          const closeMins = drawMins - 30; // Fechado antes do sorteio (opcional)
          // Usaremos apenas limite até a hora exata ou mais restrito, igual layout antigo
          if (mins >= closeMins && mins < drawMins) {
            isAnyClosed = true;
            break;
          }
        }
      }
      setClosed(isAnyClosed);

      const next = getNextDraw(now, schedule);
      const diff = next.getTime() - now.getTime();

      if (diff <= 0) {
        setDays(0); setHours(0); setMinutes(0); setSeconds(0);
        return;
      }

      setDays(Math.floor(diff / 86400000));
      setHours(Math.floor((diff % 86400000) / 3600000));
      setMinutes(Math.floor((diff % 3600000) / 60000));
      setSeconds(Math.floor((diff % 60000) / 1000));

      const dayName = DAY_NAMES[next.getDay()];
      const monthName = MONTH_SHORT[next.getMonth()];
      const hr = next.getHours().toString().padStart(2, '0');
      const min = next.getMinutes().toString().padStart(2, '0');
      setNextDrawDate(`${dayName}, ${next.getDate()} ${monthName} às ${hr}:${min}`);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [schedule]);

  if (closed) {
    return (
      <div className="text-center bg-card border border-destructive rounded-xl p-4">
        <p className="text-lg font-display font-bold text-destructive animate-pulse">
          🚫 APOSTAS ENCERRADAS
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-4 space-y-2">
      <p className="text-xs text-muted-foreground uppercase tracking-widest text-center font-medium">
        Próximo Sorteio
      </p>
      <p className="text-xs text-muted-foreground text-center">{nextDrawDate}</p>
      <div className="flex justify-center gap-3">
        <TimeBox value={days} label="Dias" />
        <TimeBox value={hours} label="Horas" />
        <TimeBox value={minutes} label="Min" />
        <TimeBox value={seconds} label="Seg" />
      </div>
    </div>
  );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-foreground text-background rounded-lg w-14 h-14 flex items-center justify-center">
      <span className="text-2xl font-display font-bold">{value.toString().padStart(2, "0")}</span>
    </div>
    <span className="text-[10px] text-muted-foreground uppercase mt-1">{label}</span>
  </div>
);

function getNextDraw(now: Date, schedule: DrawSchedule): Date {
  const candidates: Date[] = [];

  // Create candidate dates for the next 7 days, for each draw time
  for (let d = 0; d < 8; d++) {
    const candidateDay = new Date(now);
    candidateDay.setDate(now.getDate() + d);

    if (schedule.drawDays.includes(candidateDay.getDay())) {
      for (const time of schedule.drawTimes) {
        const candidateTime = new Date(candidateDay);
        candidateTime.setHours(time.hour, time.minute, 0, 0);
        // Só considera candidato válido se for estritamente no futuro 
        if (candidateTime > now) {
          candidates.push(candidateTime);
        }
      }
    }
  }

  // Sort candidates by lowest time and return the very next
  candidates.sort((a, b) => a.getTime() - b.getTime());

  // Default fallback
  return candidates[0] || new Date(now.getTime() + 86400000);
}

export default CountdownTimer;
