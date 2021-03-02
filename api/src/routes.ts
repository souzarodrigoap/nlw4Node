import { Router } from 'express';
import { SurveysControllers } from './controllers/SurveyController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveysControllers();

router.post("/users", userController.create);
router.get("/users", userController.show);
router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.show);

export { router };
