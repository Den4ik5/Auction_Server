import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from "../../users.entity";
import {JwtModule} from "@nestjs/jwt";
import {UserService} from "./services/user.service";


@Module({
  providers: [UserService],

  imports: [TypeOrmModule.forFeature([User]),
      JwtModule.register({
        secretOrPrivateKey: "QWERTY123456"
      })
  ]
})
export class AuthModule {}
