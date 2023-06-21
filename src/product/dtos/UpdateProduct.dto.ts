import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID, MaxLength, Min, ValidateNested, IsOptional } from "class-validator";
import { CharacteristicProductDTO } from "./CharacteristicProduct.dto";
import { ImageProductDTO } from "./ImageProduct.dto";
import { Type } from "class-transformer";

export class UpdateProductDTO {

    @IsUUID(undefined, { message: 'ID de usuário inválido' })
    @IsOptional()
    userID: string

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    name: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsPositive()
    @IsOptional()
    value: number;

    @IsInt()
    @Min(0)
    @IsOptional()
    quantity: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(1000)
    @IsOptional()
    description: string;

    @ValidateNested()
    @IsArray()
    @Type(() => CharacteristicProductDTO)
    @ArrayMinSize(3)
    @IsOptional()
    characteristics: CharacteristicProductDTO[];

    @ValidateNested()
    @IsArray()
    @Type(() => ImageProductDTO)
    @ArrayMinSize(1)
    @IsOptional()
    images: ImageProductDTO[];

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    category: string;

}