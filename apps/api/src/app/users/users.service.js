"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const offer_entity_1 = require("../offers/offer.entity");
let UsersService = class UsersService {
    constructor(userRepository, offerRepository) {
        this.userRepository = userRepository;
        this.offerRepository = offerRepository;
    }
    findAll() {
        return this.userRepository.find();
    }
    findOne(id) {
        return this.userRepository.findOne(id);
    }
    findOneByEmail(email) {
        return this.userRepository.findOne({
            where: { email },
        });
    }
    create(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userEntity = new user_entity_1.User();
            userEntity.firstName = user.firstName;
            userEntity.email = user.email;
            userEntity.role = user.role;
            return yield this.userRepository.save(userEntity);
        });
    }
    findOffersById(id) {
        return this.offerRepository.find({
            where: [
                { userId: id },
            ],
        });
    }
};
UsersService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    tslib_1.__param(1, typeorm_1.InjectRepository(offer_entity_1.Offer)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map