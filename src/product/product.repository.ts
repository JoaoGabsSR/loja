import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./entities/Product.entity";

@Injectable()
export class ProductRepository {

    private products: ProductEntity[] = [];

    public async addProduct(product: ProductEntity) {
        this.products.push(product);
    }

    public async list() {
        return this.products;
    }

    public async update(id: string, updateData: Partial<ProductEntity>) {
        const notTouchableData = ['productID', 'userID'];
        const product = this.findProductByID(id);

        Object.entries(updateData).forEach(([key, value]) => {
            if (notTouchableData.includes(key)) return;

            product[key] = value;
        });

        return product;
    }

    public async delete(id: string) {
        const product = this.findProductByID(id);

        this.products = this.products.filter(
            productSaved => productSaved.productID !== id
        );

        return product;
    }

    public async findProductByID(id: string) {
        const possibleProduct = this.products.find(product => product.productID === id);

        if (!possibleProduct) throw Error('Produto não existe');

        return possibleProduct;
    }

}