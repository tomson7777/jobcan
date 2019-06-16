"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const file_upload_controller_1 = require("./file-upload.controller");
const file_upload_service_1 = require("./file-upload.service");
let FileUploadModule = class FileUploadModule {
};
FileUploadModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [file_upload_controller_1.FileUploadController],
        providers: [file_upload_service_1.FileUploadService],
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;
//# sourceMappingURL=file-upload.module.js.map