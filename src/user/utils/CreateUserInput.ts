import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class CreateUserInput {

    @Field()
    username: string

    @Field({nullable: true})
    firstName?: string

    @Field({nullable: true})
    lastName?: string

    @Field({nullable: true})
    phoneNumber?: string

}
