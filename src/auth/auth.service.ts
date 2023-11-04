import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { compare } from "bcrypt";
// import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

    constructor(private userService: UserService){

    }

    async login(dto: LoginDto){
        const user = await this.userService
    }
    
    async validateUser(dto: LoginDto){
        const user = await this.userService.findByEmail(dto.username)

        if(user && (await compare(dto.password, user.password))){
            const {password, ...rest} = user;
        }
    }

}
