"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
let Offer = class Offer {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Offer.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 250, type: 'varchar' }),
    tslib_1.__metadata("design:type", String)
], Offer.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    tslib_1.__metadata("design:type", Number)
], Offer.prototype, "userId", void 0);
tslib_1.__decorate([
    typeorm_1.OneToOne(() => user_entity_1.User, user => user.id),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    tslib_1.__metadata("design:type", user_entity_1.User)
], Offer.prototype, "user", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp with time zone', name: 'created_at' }),
    tslib_1.__metadata("design:type", String)
], Offer.prototype, "createdAt", void 0);
Offer = tslib_1.__decorate([
    typeorm_1.Entity('offer')
], Offer);
exports.Offer = Offer;
//# sourceMappingURL=offer.entity.js.map