import { IsString } from "class-validator";

export class ImageProductDTO {

    @IsString()
    url: string;

    @IsString()
    description: string;

}