"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const joi_validation_pipe_1 = require("../pipes/joi-validation.pipe");
const passport_1 = require("@nestjs/passport");
const create_user_schema_1 = require("./create-user.schema");
const create_user_dto_1 = require("./create-user.dto");
const role_decorator_1 = require("../auth/role.decorator");
const role_enum_1 = require("../shared/role.enum");
const role_guard_1 = require("../auth/role.guard");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.usersService.findAll();
        });
    }
    findOne(id) {
        return this.usersService.findOne(id);
    }
    findOffersByUserId(id) {
        return this.usersService.findOffersById(id);
    }
    create(createUserDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.usersService.create(createUserDto);
        });
    }
};
tslib_1.__decorate([
    common_1.Get(),
    role_decorator_1.Roles(role_enum_1.Role.admin),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    role_decorator_1.Roles(role_enum_1.Role.admin),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
tslib_1.__decorate([
    common_1.Get(':id/offers'),
    role_decorator_1.Roles(role_enum_1.Role.admin),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "findOffersByUserId", null);
tslib_1.__decorate([
    common_1.Post(),
    common_1.UsePipes(new joi_validation_pipe_1.JoiValidationPipe(create_user_schema_1.CreateUserSchema)),
    role_decorator_1.Roles(role_enum_1.Role.admin),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
UsersController = tslib_1.__decorate([
    common_1.Controller('users'),
    common_1.UseGuards(role_guard_1.RoleGuard),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    tslib_1.__metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map