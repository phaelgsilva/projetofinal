// src/types/index.ts

export interface User {
    id: string;
    email: string;
    name: string;
}

export interface Court {
    id: string;
    name: string;
    location: string;
    availableTimes: string[];
}

export interface Reservation {
    id: string;
    userId: string;
    courtId: string;
    date: string;
    time: string;
}