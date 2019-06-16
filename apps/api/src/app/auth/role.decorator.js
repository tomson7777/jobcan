"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.Roles = (...roles) => {
    console.log(roles);
    return common_1.SetMetadata('role', roles);
};
//# sourceMappingURL=role.decorator.js.map