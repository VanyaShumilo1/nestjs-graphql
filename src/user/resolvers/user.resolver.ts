import {Args, Int, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {User} from "../models/user.model";
import {UserSetting} from "../models/userSetting.model";
import {CreateUserInput} from "../utils/CreateUserInput";
import {UserService} from "../user.service";
import {UserSettingService} from "../userSetting.service";

@Resolver(of => User)
export class UserResolver {

    constructor(private userService: UserService, private userSettingService: UserSettingService) {}

    @Query(returns => User, {nullable: true, name: "getUserById"})
    getById(
        @(Args('id', {type: () => Int})) id: number
    ) {
        return this.userService.getUserById(id);
    }

    @Query(returns => [User], {nullable: true, name: "getAllUsers"})
    getAll() {
        return this.userService.getAllUsers();
    }

    // @ResolveField(returns => UserSetting, {name: 'settings', nullable: true})
    // getUserSettings(@Parent() user: User) {
    //     return this.userSettingService.getUserSettingsById(user.id)
    // }

    @Mutation(returns => User)
    createUser(
        @Args('createUserData') createUserData: CreateUserInput
    ) {
        return this.userService.createUser(createUserData);
    }
}
