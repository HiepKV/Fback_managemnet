import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.POSTGRES_USER || 'admin',
    password: process.env.POSTGRES_PASSWORD ,
    database: process.env.POSTGRES_DB ,
    migrations: ['dist/migrations/*{.ts,.js}'],
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize:  false,
    logging: false

});
