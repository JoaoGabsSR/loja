export class ListingProductsDTO {

    constructor(
        readonly productID: string,
        readonly userID: string,
        readonly name: string
    ) { }

}