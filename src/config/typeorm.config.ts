import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { registerAs } from '@nestjs/config';
dotenv.config();

const config = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST ,
    port: process.env.POSTGRES_PORT ,
    database: process.env.POSTGRES_DB ,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    entities: ['dist/**/entities/**/*{.js,.ts}'],
    migrations: ['dist/migrations/**/*{.js,.ts}'],
    synchronize: false,
    logging: false
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
