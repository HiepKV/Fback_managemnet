import { Exclude, Expose } from "class-transformer";

export class SignupDto {
    @Expose()
    userName: string;
    @Expose()
    email: string;
    @Expose()
    phone_number: string;
    @Expose()
    password: string;
    @Expose()
    passwordConfirm: string;

}