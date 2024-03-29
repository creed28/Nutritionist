import { RequestHandler } from "express";
import FoodModel from "../models/food";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import { FoodBody, UpdateFoodParams } from "../interfaces/food";

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

export const createFood: RequestHandler<unknown, unknown, FoodBody, unknown> = 
async (req, res, next) => {
  const name = req.body.name;
  const kCal = req.body.kCal;
  const protein = req.body.protein;
  const fat = req.body.fat;
  const carbs = req.body.carbs;

  try {
    if (!name || !kCal || !protein || !fat || !carbs) {
      throw createHttpError(400, "Food must have all fields");
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

export const updateFood: RequestHandler<UpdateFoodParams, unknown, FoodBody, unknown> = 
async (req, res, next) => {
  const foodId = req.params.foodId;
  const newName = req.body.name;
  const newCal = req.body.kCal;
  const newProtein = req.body.protein;
  const newFat = req.body.fat;
  const newCarbs = req.body.carbs;

  try {
    if(!mongoose.isValidObjectId(foodId)) {
      throw createHttpError(400, "Invalid food id");
    }

    if (!newName || !newCal || !newProtein || !newFat || !newCarbs) {
      throw createHttpError(400, "Food must have all fields");
    }

    const food = await FoodModel.findById(foodId).exec();

    if (!food) {
      throw createHttpError(404, "Food not found");
    }

    food.name = newName;
    food.kCal = newCal;
    food.protein = newProtein;
    food.fat = newFat;
    food.carbs = newCarbs;

    const updatedFood = await food.save();

    res.status(200).json(updatedFood);
  } catch (error) {
      next(error);
  }
};

export const deleteFood: RequestHandler = async (req, res, next) => {
  const foodId = req.params.foodId;

  try {
    if(!mongoose.isValidObjectId(foodId)) {
      throw createHttpError(400, "Invalid food id");
    }

    const food = await FoodModel.findById(foodId).exec();

    if(!food){
      throw createHttpError(404, "Food not found");
    }

    await food.deleteOne();

    res.sendStatus(204);
  } catch (error) {
      next(error);
  }
};
