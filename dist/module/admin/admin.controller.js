"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const admin_service_1 = require("./admin.service");
const userBlockByAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user || req.user.role !== 'admin') {
        throw new Error('User is not authenticated or authorized');
    }
    const { userId } = req.params;
    const result = yield admin_service_1.adminService.blockUser(userId);
    if (!result) {
        throw new Error('User not found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'User blocked successfully',
        data: result,
    });
}));
const deleteBlogByAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user || req.user.role !== 'admin') {
        throw new Error('User is not authenticated or authorized');
    }
    const { id: blogId } = req.params;
    const result = yield admin_service_1.adminService.deleteBlog(blogId);
    if (!result) {
        throw new Error('Blog not found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Blog deleted successfully',
        data: undefined,
    });
}));
exports.adminController = {
    userBlockByAdmin,
    deleteBlogByAdmin,
};
