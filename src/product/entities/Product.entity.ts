import { CharacteristicProductEntity } from "./CharacteristicsProduct.entity";
import { ImageProductEntity } from "./ImageProduct.entity";

export class ProductEntity {

    productID: string;
    userID: string;
    name: string;
    value: number;
    quantity: number;
    description: string;
    characteristics: CharacteristicProductEntity[];
    images: ImageProductEntity[];
    category: string;

}