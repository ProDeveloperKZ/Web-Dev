import { ProductInfo } from "./product-info";

export interface Category {
    id: number,
    name: string,
    productList: ProductInfo[]
}
