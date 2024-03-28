import { RequestHandler } from "express";
import FoodModel from "../models/food";
import createHttpError from "http-errors";
import mongoose from "mongoose";

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
    if(!mongoose.isValidObjectId(foodId)) {
      throw createHttpError(400, "Invalid food id");
    }

    const food = await FoodModel.findById(foodId).exec();

    if (!food) {
      throw createHttpError(404, "Food not found");
    }

    res.status(200).json(food);
  } catch (error) {
      next(error);
  }
};

interface CreateFoodBody {
  name?: string,
  kCal?: number,
  protein?: number,
  fat?: number,
  carbs?: number
}

export const createFood: RequestHandler<unknown, unknown, CreateFoodBody, unknown> = 
async (req, res, next) => {
  const name = req.body.name;
  const kCal = req.body.kCal;
  const protein = req.body.protein;
  const fat = req.body.fat;
  const carbs = req.body.carbs;

  try {
    if (!name || !kCal || !protein || !fat || !carbs) {
      throw createHttpError(400,"Food must have all fields");
    }

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
