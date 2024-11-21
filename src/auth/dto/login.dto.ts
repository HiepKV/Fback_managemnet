import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
export class LoginDto {
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    password: string;
}