"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
let FileUploadController = class FileUploadController {
    uploadFile(files) {
        console.log(files);
    }
};
tslib_1.__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('files')),
    tslib_1.__param(0, common_1.UploadedFiles()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FileUploadController.prototype, "uploadFile", null);
FileUploadController = tslib_1.__decorate([
    common_1.Controller('file-upload')
], FileUploadController);
exports.FileUploadController = FileUploadController;
//# sourceMappingURL=file-upload.controller.js.map