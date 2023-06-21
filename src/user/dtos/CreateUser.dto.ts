import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailIsUnic } from "../validation/emai-is-unic.validator";

export class CreateUserDTO {

    @IsNotEmpty({ message: "O nome não pode ser vazio" })
    name: string;

    @IsEmail(undefined, { message: "Email passado inválido, volte e verifique" })
    @EmailIsUnic({ message: 'Email informado já está cadastrado' })
    email: string;

    @MinLength(6, { message: "A senha não pode ter menos de 6 caracteres" })
    password: string;

}