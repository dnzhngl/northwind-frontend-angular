//! Api'den gelen ProductResponse'un datasına karşılık gelen nesne
export interface Product{
    productId:number;
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice: number;
}