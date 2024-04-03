import express from "express";
import * as FoodsController from "../controllers/foods";

const router = express.Router();

router.get("/", FoodsController.getFoods);

router.get("/search", FoodsController.searchFoods);

router.get("/:foodId", FoodsController.getFood);

router.post("/", FoodsController.createFood);

router.patch("/:foodId", FoodsController.updateFood);

router.delete("/:foodId", FoodsController.deleteFood);

export default router;
