import {Module} from '@nestjs/common';

import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {UserModule} from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import * as process from "process";
import {ConfigModule} from "@nestjs/config";
import {User} from "./user/models/user.model";
import {UserSetting} from "./user/models/userSetting.model";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true
        }),

        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'src/schema.gql',
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [User, UserSetting],
            synchronize: true,
            autoLoadEntities: true,
            // logging: true
        }),
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
