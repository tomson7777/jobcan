"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const offers_service_1 = require("./offers.service");
const create_offer_dto_1 = require("./create-offer.dto");
const joi_validation_pipe_1 = require("../pipes/joi-validation.pipe");
const create_offer_schema_1 = require("./create-offer.schema");
const typeorm_1 = require("typeorm");
const role_decorator_1 = require("../auth/role.decorator");
const role_enum_1 = require("../shared/role.enum");
let OffersController = class OffersController {
    constructor(offersService) {
        this.offersService = offersService;
    }
    findAll(page = 1, limit = 50, sort = [], searchTitlePhrase) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sortParams = Array.isArray(sort) ? sort : [sort];
            const order = sortParams
                .map(item => {
                const [sortBy, sortOrder] = item.split('.');
                return { sortBy, sortOrder: sortOrder.toUpperCase() };
            })
                .reduce((acc, item) => Object.assign(acc, { [item.sortBy]: item.sortOrder }), {});
            const where = { title: typeorm_1.Like(`%${searchTitlePhrase}%`) };
            const searchOptions = Object.assign({}, (sort && { order }), (searchTitlePhrase && { where }));
            return this.offersService.findAll({ page, limit }, searchOptions);
        });
    }
    create(createOfferDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.offersService.create(createOfferDto);
        });
    }
    findOne(id) {
        return this.offersService.findOne(id);
    }
    findOfferWithCompany(id) {
        return this.offersService.findOneWithCompany(id);
    }
    /* powinno co innego zwracać */
    update(id, createOfferDto) {
        return this.offersService.update(id, createOfferDto);
    }
    /* powinno co innego zwracać */
    remove(id) {
        return this.offersService.delete(id);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query('page')),
    tslib_1.__param(1, common_1.Query('limit')),
    tslib_1.__param(2, common_1.Query('sort')),
    tslib_1.__param(3, common_1.Query('search')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], OffersController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    common_1.UsePipes(new joi_validation_pipe_1.JoiValidationPipe(create_offer_schema_1.CreateOfferSchema)),
    role_decorator_1.Roles(role_enum_1.Role.client, role_enum_1.Role.admin),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [create_offer_dto_1.CreateOfferDto]),
    tslib_1.__metadata("design:returntype", Promise)
], OffersController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OffersController.prototype, "findOne", null);
tslib_1.__decorate([
    common_1.Get(':id/details'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OffersController.prototype, "findOfferWithCompany", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    role_decorator_1.Roles(role_enum_1.Role.client, role_enum_1.Role.admin),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, create_offer_dto_1.CreateOfferDto]),
    tslib_1.__metadata("design:returntype", void 0)
], OffersController.prototype, "update", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    role_decorator_1.Roles(role_enum_1.Role.client, role_enum_1.Role.admin),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], OffersController.prototype, "remove", null);
OffersController = tslib_1.__decorate([
    common_1.Controller('offers'),
    tslib_1.__metadata("design:paramtypes", [offers_service_1.OffersService])
], OffersController);
exports.OffersController = OffersController;
//# sourceMappingURL=offers.controller.js.map