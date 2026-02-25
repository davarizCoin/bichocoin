export interface Minister {
    id: string; // 01 to 11
    name: string;
    role?: string;
}

export const stfMinisters: Minister[] = [
    { id: "01", name: "Edson Fachin" },
    { id: "02", name: "Gilmar Mendes" },
    { id: "03", name: "Cármen Lúcia" },
    { id: "04", name: "Dias Toffoli" },
    { id: "05", name: "Luiz Fux" },
    { id: "06", name: "Alexandre de Moraes" },
    { id: "07", name: "Nunes Marques" },
    { id: "08", name: "André Mendonça" },
    { id: "09", name: "Cristiano Zanin" },
    { id: "10", name: "Flávio Dino" }
];
