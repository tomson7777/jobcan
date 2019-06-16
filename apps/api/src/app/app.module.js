"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const offers_module_1 = require("./offers/offers.module");
const users_module_1 = require("./users/users.module");
const file_upload_module_1 = require("./file-upload/file-upload.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'qwerty',
                database: 'jobber',
                entities: [__dirname + '/**/*.entity{.ts, .js}'],
            }),
            offers_module_1.OffersModule,
            users_module_1.UsersModule,
            file_upload_module_1.FileUploadModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map