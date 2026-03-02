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
  // --- Nacionais / USA ---
  quina: { drawDays: [1, 2, 3, 4, 5, 6], drawTimes: [{ hour: 21, minute: 0 }] },
  "mega-sena": { drawDays: [2, 4, 6], drawTimes: [{ hour: 21, minute: 0 }] },
  "dia-de-sorte": { drawDays: [2, 4, 6], drawTimes: [{ hour: 21, minute: 0 }] },
  "mais-milionaria": { drawDays: [3, 6], drawTimes: [{ hour: 21, minute: 0 }] },
  "mega-millions": { drawDays: [2, 5], drawTimes: [{ hour: 0, minute: 0 }] }, // 23:00 EST
  powerball: { drawDays: [1, 3, 6], drawTimes: [{ hour: 0, minute: 59 }] },
  "lotto-america": { drawDays: [1, 3, 6], drawTimes: [{ hour: 0, minute: 0 }] },
  "2by2": { drawDays: [0, 1, 2, 3, 4, 5, 6], drawTimes: [{ hour: 0, minute: 0 }] },
  "bicho-dc4": { drawDays: [0, 1, 2, 3, 4, 5, 6], drawTimes: [{ hour: 13, minute: 50 }, { hour: 19, minute: 50 }] },

  // --- Europa ---
  "uk-lotto": { drawDays: [3, 6], drawTimes: [{ hour: 17, minute: 0 }] }, // UK
  "uk-thunderball": { drawDays: [2, 3, 5, 6], drawTimes: [{ hour: 16, minute: 0 }] },
  "superenalotto": { drawDays: [2, 4, 5, 6], drawTimes: [{ hour: 16, minute: 0 }] }, // IT
  "lotto-italy": { drawDays: [2, 4, 5, 6], drawTimes: [{ hour: 16, minute: 0 }] },
  "el-gordo": { drawDays: [0], drawTimes: [{ hour: 17, minute: 30 }] }, // ES
  "la-primitiva": { drawDays: [1, 4, 6], drawTimes: [{ hour: 17, minute: 30 }] },
  "france-loto": { drawDays: [1, 3, 6], drawTimes: [{ hour: 16, minute: 30 }] }, // FR
  "euromillions-fr": { drawDays: [2, 5], drawTimes: [{ hour: 16, minute: 0 }] },
  "lotto-6aus49": { drawDays: [3, 6], drawTimes: [{ hour: 14, minute: 0 }] }, // DE
  "eurojackpot-de": { drawDays: [2, 5], drawTimes: [{ hour: 15, minute: 0 }] },
  "lotto-pl": { drawDays: [2, 4, 6], drawTimes: [{ hour: 17, minute: 40 }] }, // PL
  "totoloto-pt": { drawDays: [3, 6], drawTimes: [{ hour: 18, minute: 0 }] }, // PT
  "swiss-lotto": { drawDays: [3, 6], drawTimes: [{ hour: 15, minute: 0 }] }, // CH
  "sweden-lotto": { drawDays: [3, 6], drawTimes: [{ hour: 15, minute: 0 }] }, // SE
  "irish-lotto": { drawDays: [3, 6], drawTimes: [{ hour: 16, minute: 0 }] }, // IE

  // --- Américas ---
  "lotto-649": { drawDays: [3, 6], drawTimes: [{ hour: 23, minute: 30 }] }, // CA
  "melate": { drawDays: [0, 3, 5], drawTimes: [{ hour: 23, minute: 15 }] }, // MX
  "baloto": { drawDays: [3, 6], drawTimes: [{ hour: 1, minute: 0 }] }, // CO
  "quini-6": { drawDays: [0, 3], drawTimes: [{ hour: 21, minute: 15 }] }, // AR
  "loto-chile": { drawDays: [0, 2, 4], drawTimes: [{ hour: 21, minute: 0 }] }, // CL
  "tinka": { drawDays: [0, 3], drawTimes: [{ hour: 22, minute: 50 }] }, // PE

  // --- Oceania, Ásia e África ---
  "oz-lotto": { drawDays: [2], drawTimes: [{ hour: 8, minute: 30 }] }, // AU
  "nz-lotto": { drawDays: [3, 6], drawTimes: [{ hour: 5, minute: 0 }] }, // NZ
  "loto-7": { drawDays: [1, 4], drawTimes: [{ hour: 6, minute: 45 }] }, // JP
  "sa-lotto": { drawDays: [3, 6], drawTimes: [{ hour: 16, minute: 0 }] }, // ZA
};

export const useBettingStatus = (schedule: DrawSchedule) => {
  const [bettingOpen, setBettingOpen] = useState(true);

  useEffect(() => {
    const check = () => {
      const now = getBrasiliaTime();
      const reopen = getActivePause(now, schedule);
      setBettingOpen(reopen === null);
    };

    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, [schedule]);

  return { bettingOpen };
};

function getBrasiliaTime(): Date {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc - 3 * 3600000);
}

function getActivePause(now: Date, schedule: DrawSchedule): Date | null {
  for (let d = -1; d <= 1; d++) {
    const candidateDay = new Date(now);
    candidateDay.setDate(now.getDate() + d);

    if (schedule.drawDays.includes(candidateDay.getDay())) {
      for (const time of schedule.drawTimes) {
        const candidateTime = new Date(candidateDay.getTime());
        candidateTime.setHours(time.hour, time.minute, 0, 0);

        const closeTime = new Date(candidateTime.getTime() - 30 * 60000);
        const reopenTime = new Date(candidateTime.getTime() + 30 * 60000);

        if (now >= closeTime && now < reopenTime) {
          return reopenTime;
        }
      }
    }
  }
  return null;
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

  const [pauseTimeLeft, setPauseTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = getBrasiliaTime();

      const reopenDate = getActivePause(now, schedule);
      setClosed(reopenDate !== null);

      if (reopenDate) {
        const diff = reopenDate.getTime() - now.getTime();
        if (diff > 0) {
          setPauseTimeLeft({
            hours: Math.floor((diff % 86400000) / 3600000),
            minutes: Math.floor((diff % 3600000) / 60000),
            seconds: Math.floor((diff % 60000) / 1000)
          });
        }
      } else {
        setPauseTimeLeft(null);
      }

      const next = getNextDraw(now, schedule);
      const diffNext = next.getTime() - now.getTime();

      if (diffNext <= 0) {
        setDays(0); setHours(0); setMinutes(0); setSeconds(0);
        return;
      }

      setDays(Math.floor(diffNext / 86400000));
      setHours(Math.floor((diffNext % 86400000) / 3600000));
      setMinutes(Math.floor((diffNext % 3600000) / 60000));
      setSeconds(Math.floor((diffNext % 60000) / 1000));

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
      <div className="text-center bg-card border border-destructive rounded-xl p-4 space-y-2">
        <p className="text-lg font-display font-bold text-destructive animate-pulse">
          🚫 Pausa para o sorteio!
        </p>
        {pauseTimeLeft && (
          <p className="text-sm text-muted-foreground font-mono">
            Retorna em: {pauseTimeLeft.hours > 0 ? `${pauseTimeLeft.hours}:` : ''}{pauseTimeLeft.minutes.toString().padStart(2, '0')}:{pauseTimeLeft.seconds.toString().padStart(2, '0')}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-4 space-y-2">
      <p className="text-xs text-muted-foreground uppercase tracking-widest text-center font-medium">
        Próximo Sorteio
      </p>
      <p className="text-xs text-muted-foreground text-center">{nextDrawDate} <span className="text-[10px] opacity-70">(DF - Brasil)</span></p>
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
