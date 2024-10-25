export interface ScheduleDto {
    days: Array<DayDto>;
}

export interface DayDto {
    date: Date | string
    meals: Array<MealDto>;
}

export interface MealDto {
    name: string;
    macro: Macro
}

export interface Macro {
    calories: number;
    carbohydrates: number;
    protein: number;
    fat: number;
}