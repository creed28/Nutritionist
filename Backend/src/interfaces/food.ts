export interface UpdateFoodParams {
  foodId: string,
}

export interface FoodBody {
  name?: string,
  kCal?: number,
  protein?: number,
  fat?: number,
  carbs?: number,
  inTable: boolean
}
