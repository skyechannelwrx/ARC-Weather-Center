export const ALL_HAZARDS = [
    {
        id: "fog",
        sections: 1,
    },
    {
        id: "thunderstorms",
        sections: 2,
    },
    {
        id: "wind",
        sections: 3,
    },
    {
        id: "severe weather",
        sections: 5,
    },
    {
        id: "rain",
        sections: 3,
    },
    {
        id: "tropical weather",
        sections: 2,
    },
    {
        id: "heat",
        sections: 3,
    },
    {
        id: "cold",
        sections: 3,
    },
    {
        id: "condensation",
        sections: 1,
    }
] as const;

export type HazardType = 
    typeof ALL_HAZARDS[number]