"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const Joi = require("joi");
let JoiValidationPipe = class JoiValidationPipe {
    constructor(schema) {
        this.schema = schema;
    }
    transform(value, metadata) {
        const { error } = Joi.validate(value, this.schema);
        if (error) {
            const messages = error.details.map(d => d.message).join(',');
            throw new common_1.BadRequestException(messages);
        }
        return value;
    }
};
JoiValidationPipe = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [Object])
], JoiValidationPipe);
exports.JoiValidationPipe = JoiValidationPipe;
//# sourceMappingURL=joi-validation.pipe.js.map