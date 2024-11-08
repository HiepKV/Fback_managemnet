"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.POSTGRES_USER || 'admin',
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    migrations: ['dist/migrations/*{.ts,.js}'],
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: false
});
//# sourceMappingURL=typeorm.config.js.map