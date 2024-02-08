import { Model } from 'mongoose'
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interface/user.interface'

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<User>
    ) { }

    async insertUser(userName: string, password: string){
        const username = userName.toLowerCase();
        const newUser = new this.userModel({
            username,
            password
        });
        await newUser.save();
        return newUser;
    }

    async getUser(userName: string) {
        const username = userName.toLowerCase();
        const user = await this.userModel.findOne({ username });
        return user;
      }
}
