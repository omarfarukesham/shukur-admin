"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const challenge_controller_1 = require("./challenge.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constants_1 = require("../user/user.constants");
// import { ChallengeController } from "./challenge.controller";
const ChallengeRouter = (0, express_1.Router)();
// ChallengeRouter.post("/", auth(USER_ROLE.admin, USER_ROLE.user), challengeController.createChallenge);
// ChallengeRouter.get("/", auth(USER_ROLE.admin, USER_ROLE.user), challengeController.getChallenges);
// ChallengeRouter.get("/:id",  auth(USER_ROLE.admin, USER_ROLE.user), challengeController.getSingleChallenge);
// ChallengeRouter.patch("/:id", auth(USER_ROLE.admin, USER_ROLE.user), challengeController.updateChallenge);
// ChallengeRouter.delete("/:id", auth(USER_ROLE.admin, USER_ROLE.user), challengeController.deleteChallenge);
ChallengeRouter.post("/", (0, auth_1.default)(user_constants_1.USER_ROLE.admin, user_constants_1.USER_ROLE.user), challenge_controller_1.challengeController.createChallenge);
// ChallengeRouter.post("/featured", challengeController.getFeaturedChallenges);
ChallengeRouter.get("/", challenge_controller_1.challengeController.getChallenges);
ChallengeRouter.get("/:id", challenge_controller_1.challengeController.getSingleChallenge);
ChallengeRouter.patch("/:id", challenge_controller_1.challengeController.updateChallenge);
ChallengeRouter.delete("/:id", challenge_controller_1.challengeController.deleteChallenge);
exports.default = ChallengeRouter;
