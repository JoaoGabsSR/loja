import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID, MaxLength, Min, ValidateNested } from "class-validator";
import { CharacteristicProductDTO } from "./CharacteristicProduct.dto";
import { ImageProductDTO } from "./ImageProduct.dto";
import { isArray, isNumber } from "util";
import { Type } from "class-transformer";

export class CreateProdutoDTO {

    @IsUUID(undefined, { message: 'ID de usuário inválido' })
    userID: string

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsPositive()
    value: number;

    @IsInt()
    @Min(0)
    quantity: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(1000)
    description: string;

    @ValidateNested()
    @IsArray()
    @Type(() => CharacteristicProductDTO)
    @ArrayMinSize(3)
    characteristics: CharacteristicProductDTO[];

    @ValidateNested()
    @IsArray()
    @Type(() => ImageProductDTO)
    @ArrayMinSize(1)
    images: ImageProductDTO[];

    @IsNotEmpty()
    @IsString()
    category: string;

}