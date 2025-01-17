import express, { Router } from "express";
import UserController from "../controllers/userController";

const router: Router = express.Router();
const userController = new UserController();

router.get("/users", userController.getAllUsers);
router.get("/users/buyer/:id", userController.getBuyerById);
router.get("/users/farmer/:id", userController.getFarmersById);
router.post("/users/buyer", userController.createBuyer);
router.post("/users/farmer", userController.createFarmer);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

export default router;
