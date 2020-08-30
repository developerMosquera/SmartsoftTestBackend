import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456789',
    database: 'smartsoft',
    synchronize: false,
    entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/modules/database/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/modules/database/migrations',
    }
}

export = config;