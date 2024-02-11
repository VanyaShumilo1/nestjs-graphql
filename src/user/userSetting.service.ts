import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UserSetting} from "./models/userSetting.model";
import {Repository} from "typeorm";
import {CreateUserSettingsInput} from "./utils/CreateUserSettingsInput";
import {User} from "./models/user.model";

@Injectable()
export class UserSettingService {

    constructor(
        @InjectRepository(UserSetting) private userSettingRepository: Repository<UserSetting>,
        @InjectRepository(User) private userRepository: Repository<User>
    ) {
    }

    async getUserSettingsById(userId: number) {
        return await this.userSettingRepository.findOneBy({userId});
    }

    async createUserSettings(createUserSettingsData: CreateUserSettingsInput) {

        const user = await this.userRepository.findOneBy({id: createUserSettingsData.userId})

        if (!user) {
            throw new NotFoundException('user not found')
        }

        const newUserSettings = this.userSettingRepository.create(createUserSettingsData);
        const savedSettings =  await this.userSettingRepository.save(newUserSettings)

        user.settings = savedSettings
        await this.userRepository.save(user)

        return savedSettings
    }

}
