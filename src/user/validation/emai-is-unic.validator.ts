import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailIsUnicValidator implements ValidatorConstraintInterface {

    constructor(
        private userRepository: UserRepository
    ) { }

    public async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const userWithEmailExist = await this.userRepository.findUserByEmail(value);

        return !userWithEmailExist;
    }

}


export const EmailIsUnic = (validationOptions: ValidationOptions) => {

    return (object: Object, property: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: validationOptions,
            constraints: [],
            validator: EmailIsUnicValidator
        });
    }

}