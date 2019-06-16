"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class CreateOfferDto {
}
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], CreateOfferDto.prototype, "title", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", Number)
], CreateOfferDto.prototype, "userId", void 0);
exports.CreateOfferDto = CreateOfferDto;
//# sourceMappingURL=create-offer.dto.js.map