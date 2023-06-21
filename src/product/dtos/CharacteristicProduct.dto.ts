import { IsString } from "class-validator";

export class CharacteristicProductDTO {

    @IsString()
    name: string;

    @IsString()
    description: string;

}