import { RequestHandler } from "express";
import FoodModel from "../models/food";

export const getFoods: RequestHandler = async (req, res, next) => {
  try {
    const foods = await FoodModel.find().exec();
    res.status(200).json(foods);
  } catch (error) {
      next(error);
  }
};

export const getFood: RequestHandler = async (req, res, next) => {
  const foodId = req.params.foodId;
  
  try {
    const food = await FoodModel.findById(foodId).exec();
    res.status(200).json(food);
  } catch (error) {
      next(error);
  }
};

export const createFood: RequestHandler = async (req, res, next) => {
  const name = req.body.name;
  const kCal = req.body.kCal;
  const protein = req.body.protein;
  const fat = req.body.fat;
  const carbs = req.body.carbs;

  try {
    const newFood = await FoodModel.create({
      name: name,
      kCal: kCal,
      protein: protein,
      fat: fat,
      carbs: carbs,
    });

    res.status(201).json(newFood);

  } catch (error) {
    next(error);
  }
};
