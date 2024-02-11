import {Field, Int, ObjectType} from "@nestjs/graphql";
import {UserSetting} from "./userSetting.model";
import {Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn} from "typeorm";

@Entity({name: 'users'})
@ObjectType()
export class User {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    username: string;

    @Column({nullable: true})
    @Field({nullable: true})
    firstName?: string

    @Column({nullable: true})
    @Field({nullable: true})
    lastName?: string;

    @Column({nullable: true})
    @Field({nullable: true})
    phoneNumber?: string;

    @OneToOne(() => UserSetting)
    @JoinColumn()
    @Field({nullable: true})
    settings?: UserSetting


}
