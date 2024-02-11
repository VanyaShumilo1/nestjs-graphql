import {Args, Mutation, Resolver} from "@nestjs/graphql";
import {UserSetting} from "../models/userSetting.model";
import {CreateUserSettingsInput} from "../utils/CreateUserSettingsInput";
import {UserSettingService} from "../userSetting.service";

@Resolver()
export class UserSettingsResolver {

    constructor(private userSettingsService: UserSettingService) {
    }

    @Mutation(returns => UserSetting)
    async createUserSettings(
        @Args('createUserSettingsData') createUserSettingsData: CreateUserSettingsInput
    ) {
        const userSetting = await this.userSettingsService.createUserSettings(createUserSettingsData)
        return userSetting
    }

}
