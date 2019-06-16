"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const offer_entity_1 = require("./offer.entity");
const pagination_1 = require("../utils/pagination");
let OffersService = class OffersService {
    constructor(offerRepository) {
        this.offerRepository = offerRepository;
    }
    findAll(pageOptions, searchOptions) {
        return pagination_1.paginate(this.offerRepository, pageOptions, searchOptions);
    }
    create(offer) {
        const offerEntity = new offer_entity_1.Offer();
        offerEntity.title = offer.title;
        // offerEntity.userId = offer.userId;
        return this.offerRepository.save(offerEntity);
    }
    findOne(id) {
        return this.offerRepository.findOne(id);
    }
    findOneWithCompany(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.offerRepository
                .createQueryBuilder('offer')
                .select(['offer', 'user.company'])
                .leftJoin('offer.user', 'user')
                .where('offer.id = :id', { id })
                .getOne();
        });
    }
    update(id, offer) {
        return this.offerRepository.update(id, offer);
    }
    delete(id) {
        return this.offerRepository.delete(id);
    }
};
OffersService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(offer_entity_1.Offer)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository])
], OffersService);
exports.OffersService = OffersService;
//# sourceMappingURL=offers.service.js.map