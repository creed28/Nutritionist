import { RequestHandler } from "express";
import FoodModel from "../models/food";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import { FoodBody, UpdateFoodParams } from "../interfaces/food";

export const getFoods: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;

  try {
    const foods = await FoodModel.find({ inTable: true, userId: authenticatedUserId }).exec();
    res.status(200).json(foods);
  } catch (error) {
      next(error);
  }
};

export const searchFoods: RequestHandler = async (req, res, next) => {
  const searchInput = req.query.input;
  const authenticatedUserId = req.session.userId;

  try {
    if (!searchInput || typeof searchInput !== 'string') {
      throw createHttpError(400, "Search input is required and must be a string");
    }

    const foods = await FoodModel.find({ 
      name: { $regex: new RegExp(searchInput, 'i') }, 
      userId: authenticatedUserId }).exec();

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
  const authenticatedUserId = req.session.userId;

  try {
    if (!name || !kCal || !protein || !fat || !carbs) {
      throw createHttpError(400, "Food must have all fields");
    }

    const newFood = await FoodModel.create({
      userId: authenticatedUserId,
      name: name,
      kCal: kCal,
      protein: protein,
      fat: fat,
      carbs: carbs,
      inTable: true
    });
    res.status(201).json(newFood);
  } catch (error) {
      next(error);
  }
};

export const updateFood: RequestHandler<UpdateFoodParams, unknown, FoodBody, unknown> = 
async (req, res, next) => {
  const foodId = req.params.foodId;
  const authenticatedUserId = req.session.userId;

  try {
    if(!mongoose.isValidObjectId(foodId)) {
      throw createHttpError(400, "Invalid food id");
    }

    const food = await FoodModel.findOne({
      _id: foodId,
      userId: authenticatedUserId
    }).exec();

    if (!food) {
      throw createHttpError(404, "Food not found");
    }

    food.inTable = !food.inTable;

    const updatedFood = await food.save();

    res.status(200).json(updatedFood);
  } catch (error) {
      next(error);
  }
};

export const deleteFood: RequestHandler = async (req, res, next) => {
  const foodId = req.params.foodId;
  const authenticatedUserId = req.session.userId;

  try {
    if(!mongoose.isValidObjectId(foodId)) {
      throw createHttpError(400, "Invalid food id");
    }

    const food = await FoodModel.findOne({
      _id: foodId,
      userId: authenticatedUserId
    }).exec();

    if(!food){
      throw createHttpError(404, "Food not found");
    }

    await food.deleteOne();

    res.sendStatus(204);
  } catch (error) {
      next(error);
  }
};
