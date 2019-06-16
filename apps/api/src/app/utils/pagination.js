"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function paginate(repository, { page, limit }, searchOptions) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const [items, total] = yield repository.findAndCount(Object.assign({ skip: (page - 1) * limit, take: limit }, searchOptions));
        return {
            pageIndex: page,
            itemCount: items.length,
            pageCount: Math.ceil(total / limit),
            items,
            total,
        };
    });
}
exports.paginate = paginate;
//# sourceMappingURL=pagination.js.map