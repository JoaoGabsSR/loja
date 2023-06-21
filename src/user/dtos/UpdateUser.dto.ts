import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailIsUnic } from "../validation/emai-is-unic.validator";

export class UpdateUserDTO {

    @IsNotEmpty({ message: "O nome não pode ser vazio" })
    @IsOptional()
    name: string;

    @IsEmail(undefined, { message: "Email passado inválido, volte e verifique" })
    @EmailIsUnic({ message: 'Email informado já está cadastrado' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: "A senha não pode ter menos de 6 caracteres" })
    @IsOptional()
    password: string;

}