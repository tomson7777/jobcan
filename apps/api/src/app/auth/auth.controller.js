"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const joi_validation_pipe_1 = require("../pipes/joi-validation.pipe");
const register_user_dto_1 = require("./register-user.dto");
const login_user_dto_1 = require("./login-user.dto");
const register_user_schema_1 = require("./register-user.schema");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    login(loginUserDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.authService.login(loginUserDto);
        });
    }
    create(registerUserDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('registerUserDto', registerUserDto);
            return this.authService.create(registerUserDto);
        });
    }
};
tslib_1.__decorate([
    common_1.Post('login'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
tslib_1.__decorate([
    common_1.Post('register'),
    common_1.UsePipes(new joi_validation_pipe_1.JoiValidationPipe(register_user_schema_1.RegisterUserSchema)),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [register_user_dto_1.RegisterUserDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "create", null);
AuthController = tslib_1.__decorate([
    common_1.Controller('auth'),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map