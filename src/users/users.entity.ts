import {BeforeInsert, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import * as bcrypt from 'bcryptjs';
let CryptoJS = require("crypto-js");


@Entity()
export class User {
    SALT : string = 'AEZAKMI_HESOYAM_ROCKETMAN_ASNAEB_BAGUVIX';
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName: string;
    @Column()
    lastName: string;

    @Column()
    username:string;

    @Column()
    isAdmin: boolean;
    @Column()
    password: string;

    @BeforeInsert()
    hashPassword(){
        this.password = bcrypt.hash(this.password, this.SALT);
    }
}
