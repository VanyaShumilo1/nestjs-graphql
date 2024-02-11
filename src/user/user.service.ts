import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./models/user.model";
import {Repository} from "typeorm";
import {CreateUserInput} from "./utils/CreateUserInput";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {
    }

    async getAllUsers() {
        return await this.userRepository.find({relations: ['settings']});
    }

    async getUserById(id: number) {
        return await this.userRepository.findOne({
            where: {id},
            relations: ['settings']
        })
    }

    async createUser(createUserData: CreateUserInput) {
        const newUser = this.userRepository.create(createUserData)
        return await this.userRepository.save(newUser)
    }
}
