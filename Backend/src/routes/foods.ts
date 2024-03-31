import express from "express";
import * as FoodsController from "../controllers/foods";

const router = express.Router();

router.get("/foods", FoodsController.getFoods);

router.get("/foods/:foodId", FoodsController.getFood);

router.post("/foods", FoodsController.createFood);

router.patch("/foods/:foodId", FoodsController.updateFood);

router.delete("/foods/:foodId", FoodsController.deleteFood);

export default router;
