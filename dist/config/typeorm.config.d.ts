import { DataSource } from 'typeorm';
declare const _default: (() => {
    type: string;
    host: string;
    port: string;
    database: string;
    username: string;
    password: string;
    entities: string[];
    migrations: string[];
    synchronize: boolean;
    logging: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: string;
    database: string;
    username: string;
    password: string;
    entities: string[];
    migrations: string[];
    synchronize: boolean;
    logging: boolean;
}>;
export default _default;
export declare const connectionSource: DataSource;
