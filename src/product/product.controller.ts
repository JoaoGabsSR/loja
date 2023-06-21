import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { CreateProdutoDTO } from "./dtos/CreateProduct.dto";
import { ProductEntity } from "./entities/Product.entity";
import { v4 as uuid } from "uuid";
import { ListingProductsDTO } from "./dtos/ListingProducts.dto";
import { UpdateProductDTO } from "./dtos/UpdateProduct.dto";

@Controller('/products')
export class ProductController {

    constructor(
        private productRepository: ProductRepository
    ) { }

    @Get()
    public async getProduct() {
        return this.productRepository.list();
    }

    @Post()
    public async createProduct(@Body() productData: CreateProdutoDTO) {
        const productEntity = new ProductEntity()

        productEntity.productID = uuid();
        productEntity.userID = productData.userID;
        productEntity.name = productData.name;
        productEntity.value = productData.value;
        productEntity.quantity = productData.quantity;
        productEntity.description = productData.description;
        productEntity.characteristics = productData.characteristics;
        productEntity.images = productData.images;
        productEntity.category = productData.category;

        this.productRepository.addProduct(productEntity);

        return {
            product: new ListingProductsDTO(
                productEntity.productID,
                productEntity.userID,
                productEntity.name
            ),
            message: 'Produto cadastrado com sucesso'
        }
    }

    @Put('/:id')
    public async updateProduct(@Param('id') id: string, @Body() updateData: UpdateProductDTO) {
        const updatedProduct = await this.productRepository.update(id, updateData);

        return {
            product: updatedProduct,
            message: "Produto atualizado com sucesso"
        }
    }

    @Delete('/:id')
    public async deleteProduct(@Param('id') id: string) {
        const deletedProduct = await this.productRepository.delete(id);

        return {
            product: deletedProduct,
            message: 'Produto deletado com sucesso'
        }
    }

}