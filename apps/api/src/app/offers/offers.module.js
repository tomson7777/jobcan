"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const offers_service_1 = require("./offers.service");
const typeorm_1 = require("@nestjs/typeorm");
const offer_entity_1 = require("./offer.entity");
const offers_controller_1 = require("./offers.controller");
const passport_1 = require("@nestjs/passport");
let OffersModule = class OffersModule {
};
OffersModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([offer_entity_1.Offer]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
        ],
        providers: [offers_service_1.OffersService],
        controllers: [offers_controller_1.OffersController],
        exports: [offers_service_1.OffersService],
    })
], OffersModule);
exports.OffersModule = OffersModule;
//# sourceMappingURL=offers.module.js.map