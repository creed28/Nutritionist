import express from "express";
import * as FoodsController from "../controllers/foods";

const router = express.Router();

router.get("/", FoodsController.getFoods);

router.get("/:foodId", FoodsController.getFood);

router.post("/", FoodsController.createFood);

export default router;
