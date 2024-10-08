export interface ScheduleDto{
    days: Array<DayDto>;
}

interface DayDto {
    date: Date;
    meals: Array<MealDto>;
}
export interface MealDto {
    name: string;
    macro: {
        calories: number;
        carbohydrates: number;
        protein: number;
        fat: number;
    }
}