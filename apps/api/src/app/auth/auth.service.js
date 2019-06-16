"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt_1 = require("bcrypt");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AuthService = class AuthService {
    constructor(usersService, jwtService, userRepository) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }
    login(loginUserDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const payload = {
                email: loginUserDto.email,
            };
            const user = yield this.validateUser(payload);
            const isPasswordOK = yield bcrypt_1.compare(loginUserDto.password, user.password);
            if (!isPasswordOK) {
                throw new common_1.HttpException('Invalid password', common_1.HttpStatus.BAD_REQUEST);
            }
            const token = this.jwtService.sign(payload);
            return { user, token };
        });
    }
    validateUser(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.findOneByEmail(payload.email);
        });
    }
    create(registerUserDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userEntity = new user_entity_1.User();
            userEntity.email = registerUserDto.email.trim().toLowerCase();
            const salt = yield bcrypt_1.genSalt(10);
            userEntity.password = yield bcrypt_1.hash(registerUserDto.password, salt);
            const user = yield this.userRepository.save(userEntity);
            const payload = {
                email: registerUserDto.email,
            };
            const token = this.jwtService.sign(payload);
            return { user, token };
        });
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(2, typeorm_1.InjectRepository(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map