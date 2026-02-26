export interface Team {
    name: string;
    code: string;
    iso: string;
}

export interface Group {
    name: string;
    teams: Team[];
}

export interface Match {
    id: number;
    group: string;
    team1: Team;
    team2: Team;
    date: string;
    time: string;
    location: string;
}

export const worldCupGroups: Group[] = [
    {
        "name": "Grupo A",
        "teams": [
            {
                "name": "México",
                "code": "mx",
                "iso": "MEX"
            },
            {
                "name": "Coreia do Sul",
                "code": "kr",
                "iso": "KOR"
            },
            {
                "name": "África do Sul",
                "code": "za",
                "iso": "RSA"
            },
            {
                "name": "Repescagem D",
                "code": "un",
                "iso": "REP"
            }
        ]
    },
    {
        "name": "Grupo B",
        "teams": [
            {
                "name": "Canadá",
                "code": "ca",
                "iso": "CAN"
            },
            {
                "name": "Suíça",
                "code": "ch",
                "iso": "SUI"
            },
            {
                "name": "Catar",
                "code": "qa",
                "iso": "QAT"
            },
            {
                "name": "Repescagem A",
                "code": "un",
                "iso": "REP"
            }
        ]
    },
    {
        "name": "Grupo C",
        "teams": [
            {
                "name": "Brasil",
                "code": "br",
                "iso": "BRA"
            },
            {
                "name": "Marrocos",
                "code": "ma",
                "iso": "MAR"
            },
            {
                "name": "Escócia",
                "code": "gb-sct",
                "iso": "SCO"
            },
            {
                "name": "Haiti",
                "code": "ht",
                "iso": "HAI"
            }
        ]
    },
    {
        "name": "Grupo D",
        "teams": [
            {
                "name": "Estados Unidos",
                "code": "us",
                "iso": "USA"
            },
            {
                "name": "Austrália",
                "code": "au",
                "iso": "AUS"
            },
            {
                "name": "Paraguai",
                "code": "py",
                "iso": "PAR"
            },
            {
                "name": "Repescagem C",
                "code": "un",
                "iso": "REP"
            }
        ]
    },
    {
        "name": "Grupo E",
        "teams": [
            {
                "name": "Alemanha",
                "code": "de",
                "iso": "GER"
            },
            {
                "name": "Equador",
                "code": "ec",
                "iso": "ECU"
            },
            {
                "name": "Costa do Marfim",
                "code": "ci",
                "iso": "CIV"
            },
            {
                "name": "Curaçao",
                "code": "cw",
                "iso": "CUW"
            }
        ]
    },
    {
        "name": "Grupo F",
        "teams": [
            {
                "name": "Holanda",
                "code": "nl",
                "iso": "NED"
            },
            {
                "name": "Japão",
                "code": "jp",
                "iso": "JPN"
            },
            {
                "name": "Tunísia",
                "code": "tn",
                "iso": "TUN"
            },
            {
                "name": "Repescagem B",
                "code": "un",
                "iso": "REP"
            }
        ]
    },
    {
        "name": "Grupo G",
        "teams": [
            {
                "name": "Bélgica",
                "code": "be",
                "iso": "BEL"
            },
            {
                "name": "Irã",
                "code": "ir",
                "iso": "IRN"
            },
            {
                "name": "Egito",
                "code": "eg",
                "iso": "EGY"
            },
            {
                "name": "Nova Zelândia",
                "code": "nz",
                "iso": "NZL"
            }
        ]
    },
    {
        "name": "Grupo H",
        "teams": [
            {
                "name": "Espanha",
                "code": "es",
                "iso": "ESP"
            },
            {
                "name": "Uruguai",
                "code": "uy",
                "iso": "URU"
            },
            {
                "name": "Arábia Saudita",
                "code": "sa",
                "iso": "KSA"
            },
            {
                "name": "Cabo Verde",
                "code": "cv",
                "iso": "CPV"
            }
        ]
    },
    {
        "name": "Grupo I",
        "teams": [
            {
                "name": "França",
                "code": "fr",
                "iso": "FRA"
            },
            {
                "name": "Senegal",
                "code": "sn",
                "iso": "SEN"
            },
            {
                "name": "Noruega",
                "code": "no",
                "iso": "NOR"
            },
            {
                "name": "Repescagem Int. 2",
                "code": "un",
                "iso": "REP"
            }
        ]
    },
    {
        "name": "Grupo J",
        "teams": [
            {
                "name": "Argentina",
                "code": "ar",
                "iso": "ARG"
            },
            {
                "name": "Argélia",
                "code": "dz",
                "iso": "ALG"
            },
            {
                "name": "Áustria",
                "code": "at",
                "iso": "AUT"
            },
            {
                "name": "Jordânia",
                "code": "jo",
                "iso": "JOR"
            }
        ]
    },
    {
        "name": "Grupo K",
        "teams": [
            {
                "name": "Portugal",
                "code": "pt",
                "iso": "POR"
            },
            {
                "name": "Uzbequistão",
                "code": "uz",
                "iso": "UZB"
            },
            {
                "name": "Colômbia",
                "code": "co",
                "iso": "COL"
            },
            {
                "name": "Repescagem Int. 1",
                "code": "un",
                "iso": "REP"
            }
        ]
    },
    {
        "name": "Grupo L",
        "teams": [
            {
                "name": "Inglaterra",
                "code": "gb-eng",
                "iso": "ENG"
            },
            {
                "name": "Croácia",
                "code": "hr",
                "iso": "CRO"
            },
            {
                "name": "Gana",
                "code": "gh",
                "iso": "GHA"
            },
            {
                "name": "Panamá",
                "code": "pa",
                "iso": "PAN"
            }
        ]
    }
];

export const worldCupMatches: Match[] = [
    {
        "id": 1,
        "group": "Grupo A",
        "team1": {
            "name": "México",
            "code": "mx",
            "iso": "MEX"
        },
        "team2": {
            "name": "Coreia do Sul",
            "code": "kr",
            "iso": "KOR"
        },
        "date": "11/06/2026",
        "time": "16:00",
        "location": "Miami"
    },
    {
        "id": 2,
        "group": "Grupo A",
        "team1": {
            "name": "África do Sul",
            "code": "za",
            "iso": "RSA"
        },
        "team2": {
            "name": "Repescagem D",
            "code": "un",
            "iso": "REP"
        },
        "date": "12/06/2026",
        "time": "19:00",
        "location": "Nova York"
    },
    {
        "id": 3,
        "group": "Grupo B",
        "team1": {
            "name": "Canadá",
            "code": "ca",
            "iso": "CAN"
        },
        "team2": {
            "name": "Suíça",
            "code": "ch",
            "iso": "SUI"
        },
        "date": "12/06/2026",
        "time": "16:00",
        "location": "Nova York"
    },
    {
        "id": 4,
        "group": "Grupo B",
        "team1": {
            "name": "Catar",
            "code": "qa",
            "iso": "QAT"
        },
        "team2": {
            "name": "Repescagem A",
            "code": "un",
            "iso": "REP"
        },
        "date": "13/06/2026",
        "time": "19:00",
        "location": "Atlanta"
    },
    {
        "id": 5,
        "group": "Grupo C",
        "team1": {
            "name": "Brasil",
            "code": "br",
            "iso": "BRA"
        },
        "team2": {
            "name": "Marrocos",
            "code": "ma",
            "iso": "MAR"
        },
        "date": "13/06/2026",
        "time": "16:00",
        "location": "Atlanta"
    },
    {
        "id": 6,
        "group": "Grupo C",
        "team1": {
            "name": "Escócia",
            "code": "gb-sct",
            "iso": "SCO"
        },
        "team2": {
            "name": "Haiti",
            "code": "ht",
            "iso": "HAI"
        },
        "date": "14/06/2026",
        "time": "19:00",
        "location": "Dallas"
    },
    {
        "id": 7,
        "group": "Grupo D",
        "team1": {
            "name": "Estados Unidos",
            "code": "us",
            "iso": "USA"
        },
        "team2": {
            "name": "Austrália",
            "code": "au",
            "iso": "AUS"
        },
        "date": "14/06/2026",
        "time": "16:00",
        "location": "Dallas"
    },
    {
        "id": 8,
        "group": "Grupo D",
        "team1": {
            "name": "Paraguai",
            "code": "py",
            "iso": "PAR"
        },
        "team2": {
            "name": "Repescagem C",
            "code": "un",
            "iso": "REP"
        },
        "date": "15/06/2026",
        "time": "19:00",
        "location": "Los Angeles"
    },
    {
        "id": 9,
        "group": "Grupo E",
        "team1": {
            "name": "Alemanha",
            "code": "de",
            "iso": "GER"
        },
        "team2": {
            "name": "Equador",
            "code": "ec",
            "iso": "ECU"
        },
        "date": "11/06/2026",
        "time": "16:00",
        "location": "Los Angeles"
    },
    {
        "id": 10,
        "group": "Grupo E",
        "team1": {
            "name": "Costa do Marfim",
            "code": "ci",
            "iso": "CIV"
        },
        "team2": {
            "name": "Curaçao",
            "code": "cw",
            "iso": "CUW"
        },
        "date": "12/06/2026",
        "time": "19:00",
        "location": "Cidade do México"
    },
    {
        "id": 11,
        "group": "Grupo F",
        "team1": {
            "name": "Holanda",
            "code": "nl",
            "iso": "NED"
        },
        "team2": {
            "name": "Japão",
            "code": "jp",
            "iso": "JPN"
        },
        "date": "12/06/2026",
        "time": "16:00",
        "location": "Cidade do México"
    },
    {
        "id": 12,
        "group": "Grupo F",
        "team1": {
            "name": "Tunísia",
            "code": "tn",
            "iso": "TUN"
        },
        "team2": {
            "name": "Repescagem B",
            "code": "un",
            "iso": "REP"
        },
        "date": "13/06/2026",
        "time": "19:00",
        "location": "Toronto"
    },
    {
        "id": 13,
        "group": "Grupo G",
        "team1": {
            "name": "Bélgica",
            "code": "be",
            "iso": "BEL"
        },
        "team2": {
            "name": "Irã",
            "code": "ir",
            "iso": "IRN"
        },
        "date": "13/06/2026",
        "time": "16:00",
        "location": "Toronto"
    },
    {
        "id": 14,
        "group": "Grupo G",
        "team1": {
            "name": "Egito",
            "code": "eg",
            "iso": "EGY"
        },
        "team2": {
            "name": "Nova Zelândia",
            "code": "nz",
            "iso": "NZL"
        },
        "date": "14/06/2026",
        "time": "19:00",
        "location": "Vancouver"
    },
    {
        "id": 15,
        "group": "Grupo H",
        "team1": {
            "name": "Espanha",
            "code": "es",
            "iso": "ESP"
        },
        "team2": {
            "name": "Uruguai",
            "code": "uy",
            "iso": "URU"
        },
        "date": "14/06/2026",
        "time": "16:00",
        "location": "Vancouver"
    },
    {
        "id": 16,
        "group": "Grupo H",
        "team1": {
            "name": "Arábia Saudita",
            "code": "sa",
            "iso": "KSA"
        },
        "team2": {
            "name": "Cabo Verde",
            "code": "cv",
            "iso": "CPV"
        },
        "date": "15/06/2026",
        "time": "19:00",
        "location": "Seattle"
    },
    {
        "id": 17,
        "group": "Grupo I",
        "team1": {
            "name": "França",
            "code": "fr",
            "iso": "FRA"
        },
        "team2": {
            "name": "Senegal",
            "code": "sn",
            "iso": "SEN"
        },
        "date": "11/06/2026",
        "time": "16:00",
        "location": "Seattle"
    },
    {
        "id": 18,
        "group": "Grupo I",
        "team1": {
            "name": "Noruega",
            "code": "no",
            "iso": "NOR"
        },
        "team2": {
            "name": "Repescagem Int. 2",
            "code": "un",
            "iso": "REP"
        },
        "date": "12/06/2026",
        "time": "19:00",
        "location": "Monterrey"
    },
    {
        "id": 19,
        "group": "Grupo J",
        "team1": {
            "name": "Argentina",
            "code": "ar",
            "iso": "ARG"
        },
        "team2": {
            "name": "Argélia",
            "code": "dz",
            "iso": "ALG"
        },
        "date": "12/06/2026",
        "time": "16:00",
        "location": "Monterrey"
    },
    {
        "id": 20,
        "group": "Grupo J",
        "team1": {
            "name": "Áustria",
            "code": "at",
            "iso": "AUT"
        },
        "team2": {
            "name": "Jordânia",
            "code": "jo",
            "iso": "JOR"
        },
        "date": "13/06/2026",
        "time": "19:00",
        "location": "Houston"
    },
    {
        "id": 21,
        "group": "Grupo K",
        "team1": {
            "name": "Portugal",
            "code": "pt",
            "iso": "POR"
        },
        "team2": {
            "name": "Uzbequistão",
            "code": "uz",
            "iso": "UZB"
        },
        "date": "13/06/2026",
        "time": "16:00",
        "location": "Houston"
    },
    {
        "id": 22,
        "group": "Grupo K",
        "team1": {
            "name": "Colômbia",
            "code": "co",
            "iso": "COL"
        },
        "team2": {
            "name": "Repescagem Int. 1",
            "code": "un",
            "iso": "REP"
        },
        "date": "14/06/2026",
        "time": "19:00",
        "location": "Kansas City"
    },
    {
        "id": 23,
        "group": "Grupo L",
        "team1": {
            "name": "Inglaterra",
            "code": "gb-eng",
            "iso": "ENG"
        },
        "team2": {
            "name": "Croácia",
            "code": "hr",
            "iso": "CRO"
        },
        "date": "14/06/2026",
        "time": "16:00",
        "location": "Kansas City"
    },
    {
        "id": 24,
        "group": "Grupo L",
        "team1": {
            "name": "Gana",
            "code": "gh",
            "iso": "GHA"
        },
        "team2": {
            "name": "Panamá",
            "code": "pa",
            "iso": "PAN"
        },
        "date": "15/06/2026",
        "time": "19:00",
        "location": "Miami"
    },
    {
        "id": 25,
        "group": "Grupo A",
        "team1": {
            "name": "México",
            "code": "mx",
            "iso": "MEX"
        },
        "team2": {
            "name": "África do Sul",
            "code": "za",
            "iso": "RSA"
        },
        "date": "16/06/2026",
        "time": "16:00",
        "location": "Atlanta"
    },
    {
        "id": 26,
        "group": "Grupo A",
        "team1": {
            "name": "Coreia do Sul",
            "code": "kr",
            "iso": "KOR"
        },
        "team2": {
            "name": "Repescagem D",
            "code": "un",
            "iso": "REP"
        },
        "date": "17/06/2026",
        "time": "19:00",
        "location": "Dallas"
    },
    {
        "id": 27,
        "group": "Grupo B",
        "team1": {
            "name": "Canadá",
            "code": "ca",
            "iso": "CAN"
        },
        "team2": {
            "name": "Catar",
            "code": "qa",
            "iso": "QAT"
        },
        "date": "17/06/2026",
        "time": "16:00",
        "location": "Dallas"
    },
    {
        "id": 28,
        "group": "Grupo B",
        "team1": {
            "name": "Suíça",
            "code": "ch",
            "iso": "SUI"
        },
        "team2": {
            "name": "Repescagem A",
            "code": "un",
            "iso": "REP"
        },
        "date": "18/06/2026",
        "time": "19:00",
        "location": "Los Angeles"
    },
    {
        "id": 29,
        "group": "Grupo C",
        "team1": {
            "name": "Brasil",
            "code": "br",
            "iso": "BRA"
        },
        "team2": {
            "name": "Escócia",
            "code": "gb-sct",
            "iso": "SCO"
        },
        "date": "18/06/2026",
        "time": "16:00",
        "location": "Los Angeles"
    },
    {
        "id": 30,
        "group": "Grupo C",
        "team1": {
            "name": "Marrocos",
            "code": "ma",
            "iso": "MAR"
        },
        "team2": {
            "name": "Haiti",
            "code": "ht",
            "iso": "HAI"
        },
        "date": "19/06/2026",
        "time": "19:00",
        "location": "Cidade do México"
    },
    {
        "id": 31,
        "group": "Grupo D",
        "team1": {
            "name": "Estados Unidos",
            "code": "us",
            "iso": "USA"
        },
        "team2": {
            "name": "Paraguai",
            "code": "py",
            "iso": "PAR"
        },
        "date": "19/06/2026",
        "time": "16:00",
        "location": "Cidade do México"
    },
    {
        "id": 32,
        "group": "Grupo D",
        "team1": {
            "name": "Austrália",
            "code": "au",
            "iso": "AUS"
        },
        "team2": {
            "name": "Repescagem C",
            "code": "un",
            "iso": "REP"
        },
        "date": "20/06/2026",
        "time": "19:00",
        "location": "Toronto"
    },
    {
        "id": 33,
        "group": "Grupo E",
        "team1": {
            "name": "Alemanha",
            "code": "de",
            "iso": "GER"
        },
        "team2": {
            "name": "Costa do Marfim",
            "code": "ci",
            "iso": "CIV"
        },
        "date": "16/06/2026",
        "time": "16:00",
        "location": "Toronto"
    },
    {
        "id": 34,
        "group": "Grupo E",
        "team1": {
            "name": "Equador",
            "code": "ec",
            "iso": "ECU"
        },
        "team2": {
            "name": "Curaçao",
            "code": "cw",
            "iso": "CUW"
        },
        "date": "17/06/2026",
        "time": "19:00",
        "location": "Vancouver"
    },
    {
        "id": 35,
        "group": "Grupo F",
        "team1": {
            "name": "Holanda",
            "code": "nl",
            "iso": "NED"
        },
        "team2": {
            "name": "Tunísia",
            "code": "tn",
            "iso": "TUN"
        },
        "date": "17/06/2026",
        "time": "16:00",
        "location": "Vancouver"
    },
    {
        "id": 36,
        "group": "Grupo F",
        "team1": {
            "name": "Japão",
            "code": "jp",
            "iso": "JPN"
        },
        "team2": {
            "name": "Repescagem B",
            "code": "un",
            "iso": "REP"
        },
        "date": "18/06/2026",
        "time": "19:00",
        "location": "Seattle"
    },
    {
        "id": 37,
        "group": "Grupo G",
        "team1": {
            "name": "Bélgica",
            "code": "be",
            "iso": "BEL"
        },
        "team2": {
            "name": "Egito",
            "code": "eg",
            "iso": "EGY"
        },
        "date": "18/06/2026",
        "time": "16:00",
        "location": "Seattle"
    },
    {
        "id": 38,
        "group": "Grupo G",
        "team1": {
            "name": "Irã",
            "code": "ir",
            "iso": "IRN"
        },
        "team2": {
            "name": "Nova Zelândia",
            "code": "nz",
            "iso": "NZL"
        },
        "date": "19/06/2026",
        "time": "19:00",
        "location": "Monterrey"
    },
    {
        "id": 39,
        "group": "Grupo H",
        "team1": {
            "name": "Espanha",
            "code": "es",
            "iso": "ESP"
        },
        "team2": {
            "name": "Arábia Saudita",
            "code": "sa",
            "iso": "KSA"
        },
        "date": "19/06/2026",
        "time": "16:00",
        "location": "Monterrey"
    },
    {
        "id": 40,
        "group": "Grupo H",
        "team1": {
            "name": "Uruguai",
            "code": "uy",
            "iso": "URU"
        },
        "team2": {
            "name": "Cabo Verde",
            "code": "cv",
            "iso": "CPV"
        },
        "date": "20/06/2026",
        "time": "19:00",
        "location": "Houston"
    },
    {
        "id": 41,
        "group": "Grupo I",
        "team1": {
            "name": "França",
            "code": "fr",
            "iso": "FRA"
        },
        "team2": {
            "name": "Noruega",
            "code": "no",
            "iso": "NOR"
        },
        "date": "16/06/2026",
        "time": "16:00",
        "location": "Houston"
    },
    {
        "id": 42,
        "group": "Grupo I",
        "team1": {
            "name": "Senegal",
            "code": "sn",
            "iso": "SEN"
        },
        "team2": {
            "name": "Repescagem Int. 2",
            "code": "un",
            "iso": "REP"
        },
        "date": "17/06/2026",
        "time": "19:00",
        "location": "Kansas City"
    },
    {
        "id": 43,
        "group": "Grupo J",
        "team1": {
            "name": "Argentina",
            "code": "ar",
            "iso": "ARG"
        },
        "team2": {
            "name": "Áustria",
            "code": "at",
            "iso": "AUT"
        },
        "date": "17/06/2026",
        "time": "16:00",
        "location": "Kansas City"
    },
    {
        "id": 44,
        "group": "Grupo J",
        "team1": {
            "name": "Argélia",
            "code": "dz",
            "iso": "ALG"
        },
        "team2": {
            "name": "Jordânia",
            "code": "jo",
            "iso": "JOR"
        },
        "date": "18/06/2026",
        "time": "19:00",
        "location": "Miami"
    },
    {
        "id": 45,
        "group": "Grupo K",
        "team1": {
            "name": "Portugal",
            "code": "pt",
            "iso": "POR"
        },
        "team2": {
            "name": "Colômbia",
            "code": "co",
            "iso": "COL"
        },
        "date": "18/06/2026",
        "time": "16:00",
        "location": "Miami"
    },
    {
        "id": 46,
        "group": "Grupo K",
        "team1": {
            "name": "Uzbequistão",
            "code": "uz",
            "iso": "UZB"
        },
        "team2": {
            "name": "Repescagem Int. 1",
            "code": "un",
            "iso": "REP"
        },
        "date": "19/06/2026",
        "time": "19:00",
        "location": "Nova York"
    },
    {
        "id": 47,
        "group": "Grupo L",
        "team1": {
            "name": "Inglaterra",
            "code": "gb-eng",
            "iso": "ENG"
        },
        "team2": {
            "name": "Gana",
            "code": "gh",
            "iso": "GHA"
        },
        "date": "19/06/2026",
        "time": "16:00",
        "location": "Nova York"
    },
    {
        "id": 48,
        "group": "Grupo L",
        "team1": {
            "name": "Croácia",
            "code": "hr",
            "iso": "CRO"
        },
        "team2": {
            "name": "Panamá",
            "code": "pa",
            "iso": "PAN"
        },
        "date": "20/06/2026",
        "time": "19:00",
        "location": "Atlanta"
    },
    {
        "id": 49,
        "group": "Grupo A",
        "team1": {
            "name": "Repescagem D",
            "code": "un",
            "iso": "REP"
        },
        "team2": {
            "name": "México",
            "code": "mx",
            "iso": "MEX"
        },
        "date": "21/06/2026",
        "time": "16:00",
        "location": "Los Angeles"
    },
    {
        "id": 50,
        "group": "Grupo A",
        "team1": {
            "name": "África do Sul",
            "code": "za",
            "iso": "RSA"
        },
        "team2": {
            "name": "Coreia do Sul",
            "code": "kr",
            "iso": "KOR"
        },
        "date": "21/06/2026",
        "time": "19:00",
        "location": "Cidade do México"
    },
    {
        "id": 51,
        "group": "Grupo B",
        "team1": {
            "name": "Repescagem A",
            "code": "un",
            "iso": "REP"
        },
        "team2": {
            "name": "Canadá",
            "code": "ca",
            "iso": "CAN"
        },
        "date": "22/06/2026",
        "time": "16:00",
        "location": "Cidade do México"
    },
    {
        "id": 52,
        "group": "Grupo B",
        "team1": {
            "name": "Catar",
            "code": "qa",
            "iso": "QAT"
        },
        "team2": {
            "name": "Suíça",
            "code": "ch",
            "iso": "SUI"
        },
        "date": "22/06/2026",
        "time": "19:00",
        "location": "Toronto"
    },
    {
        "id": 53,
        "group": "Grupo C",
        "team1": {
            "name": "Haiti",
            "code": "ht",
            "iso": "HAI"
        },
        "team2": {
            "name": "Brasil",
            "code": "br",
            "iso": "BRA"
        },
        "date": "23/06/2026",
        "time": "16:00",
        "location": "Toronto"
    },
    {
        "id": 54,
        "group": "Grupo C",
        "team1": {
            "name": "Escócia",
            "code": "gb-sct",
            "iso": "SCO"
        },
        "team2": {
            "name": "Marrocos",
            "code": "ma",
            "iso": "MAR"
        },
        "date": "23/06/2026",
        "time": "19:00",
        "location": "Vancouver"
    },
    {
        "id": 55,
        "group": "Grupo D",
        "team1": {
            "name": "Repescagem C",
            "code": "un",
            "iso": "REP"
        },
        "team2": {
            "name": "Estados Unidos",
            "code": "us",
            "iso": "USA"
        },
        "date": "24/06/2026",
        "time": "16:00",
        "location": "Vancouver"
    },
    {
        "id": 56,
        "group": "Grupo D",
        "team1": {
            "name": "Paraguai",
            "code": "py",
            "iso": "PAR"
        },
        "team2": {
            "name": "Austrália",
            "code": "au",
            "iso": "AUS"
        },
        "date": "24/06/2026",
        "time": "19:00",
        "location": "Seattle"
    },
    {
        "id": 57,
        "group": "Grupo E",
        "team1": {
            "name": "Curaçao",
            "code": "cw",
            "iso": "CUW"
        },
        "team2": {
            "name": "Alemanha",
            "code": "de",
            "iso": "GER"
        },
        "date": "21/06/2026",
        "time": "16:00",
        "location": "Seattle"
    },
    {
        "id": 58,
        "group": "Grupo E",
        "team1": {
            "name": "Costa do Marfim",
            "code": "ci",
            "iso": "CIV"
        },
        "team2": {
            "name": "Equador",
            "code": "ec",
            "iso": "ECU"
        },
        "date": "21/06/2026",
        "time": "19:00",
        "location": "Monterrey"
    },
    {
        "id": 59,
        "group": "Grupo F",
        "team1": {
            "name": "Repescagem B",
            "code": "un",
            "iso": "REP"
        },
        "team2": {
            "name": "Holanda",
            "code": "nl",
            "iso": "NED"
        },
        "date": "22/06/2026",
        "time": "16:00",
        "location": "Monterrey"
    },
    {
        "id": 60,
        "group": "Grupo F",
        "team1": {
            "name": "Tunísia",
            "code": "tn",
            "iso": "TUN"
        },
        "team2": {
            "name": "Japão",
            "code": "jp",
            "iso": "JPN"
        },
        "date": "22/06/2026",
        "time": "19:00",
        "location": "Houston"
    },
    {
        "id": 61,
        "group": "Grupo G",
        "team1": {
            "name": "Nova Zelândia",
            "code": "nz",
            "iso": "NZL"
        },
        "team2": {
            "name": "Bélgica",
            "code": "be",
            "iso": "BEL"
        },
        "date": "23/06/2026",
        "time": "16:00",
        "location": "Houston"
    },
    {
        "id": 62,
        "group": "Grupo G",
        "team1": {
            "name": "Egito",
            "code": "eg",
            "iso": "EGY"
        },
        "team2": {
            "name": "Irã",
            "code": "ir",
            "iso": "IRN"
        },
        "date": "23/06/2026",
        "time": "19:00",
        "location": "Kansas City"
    },
    {
        "id": 63,
        "group": "Grupo H",
        "team1": {
            "name": "Cabo Verde",
            "code": "cv",
            "iso": "CPV"
        },
        "team2": {
            "name": "Espanha",
            "code": "es",
            "iso": "ESP"
        },
        "date": "24/06/2026",
        "time": "16:00",
        "location": "Kansas City"
    },
    {
        "id": 64,
        "group": "Grupo H",
        "team1": {
            "name": "Arábia Saudita",
            "code": "sa",
            "iso": "KSA"
        },
        "team2": {
            "name": "Uruguai",
            "code": "uy",
            "iso": "URU"
        },
        "date": "24/06/2026",
        "time": "19:00",
        "location": "Miami"
    },
    {
        "id": 65,
        "group": "Grupo I",
        "team1": {
            "name": "Repescagem Int. 2",
            "code": "un",
            "iso": "REP"
        },
        "team2": {
            "name": "França",
            "code": "fr",
            "iso": "FRA"
        },
        "date": "21/06/2026",
        "time": "16:00",
        "location": "Miami"
    },
    {
        "id": 66,
        "group": "Grupo I",
        "team1": {
            "name": "Noruega",
            "code": "no",
            "iso": "NOR"
        },
        "team2": {
            "name": "Senegal",
            "code": "sn",
            "iso": "SEN"
        },
        "date": "21/06/2026",
        "time": "19:00",
        "location": "Nova York"
    },
    {
        "id": 67,
        "group": "Grupo J",
        "team1": {
            "name": "Jordânia",
            "code": "jo",
            "iso": "JOR"
        },
        "team2": {
            "name": "Argentina",
            "code": "ar",
            "iso": "ARG"
        },
        "date": "22/06/2026",
        "time": "16:00",
        "location": "Nova York"
    },
    {
        "id": 68,
        "group": "Grupo J",
        "team1": {
            "name": "Áustria",
            "code": "at",
            "iso": "AUT"
        },
        "team2": {
            "name": "Argélia",
            "code": "dz",
            "iso": "ALG"
        },
        "date": "22/06/2026",
        "time": "19:00",
        "location": "Atlanta"
    },
    {
        "id": 69,
        "group": "Grupo K",
        "team1": {
            "name": "Repescagem Int. 1",
            "code": "un",
            "iso": "REP"
        },
        "team2": {
            "name": "Portugal",
            "code": "pt",
            "iso": "POR"
        },
        "date": "23/06/2026",
        "time": "16:00",
        "location": "Atlanta"
    },
    {
        "id": 70,
        "group": "Grupo K",
        "team1": {
            "name": "Colômbia",
            "code": "co",
            "iso": "COL"
        },
        "team2": {
            "name": "Uzbequistão",
            "code": "uz",
            "iso": "UZB"
        },
        "date": "23/06/2026",
        "time": "19:00",
        "location": "Dallas"
    },
    {
        "id": 71,
        "group": "Grupo L",
        "team1": {
            "name": "Panamá",
            "code": "pa",
            "iso": "PAN"
        },
        "team2": {
            "name": "Inglaterra",
            "code": "gb-eng",
            "iso": "ENG"
        },
        "date": "24/06/2026",
        "time": "16:00",
        "location": "Dallas"
    },
    {
        "id": 72,
        "group": "Grupo L",
        "team1": {
            "name": "Gana",
            "code": "gh",
            "iso": "GHA"
        },
        "team2": {
            "name": "Croácia",
            "code": "hr",
            "iso": "CRO"
        },
        "date": "24/06/2026",
        "time": "19:00",
        "location": "Los Angeles"
    }
];

export const getMatchesByGroup = (groupName: string): Match[] => {
    return worldCupMatches.filter(m => m.group.toLowerCase().replace(" ", "-") === groupName.toLowerCase().replace(" ", "-")).sort((a,b) => a.id - b.id);
};
