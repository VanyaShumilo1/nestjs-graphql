import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/user.resolver';
import {UserSettingsResolver} from "./resolvers/userSettings.resolver";
import { UserService } from './user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserSetting} from "./models/userSetting.model";
import {User} from "./models/user.model";
import {UserSettingService} from "./userSetting.service";

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [UserService, UserSettingService, UserResolver, UserSettingsResolver]
})
export class UserModule {}
