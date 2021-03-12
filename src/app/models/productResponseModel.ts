import { ResponseModel } from './responseModel';
import { Product } from "./products";

// IDataResult Yapısını modelliyoruz. ancak success ve message kısımlarını responseModel'den alıyoruz. 
// interface interfacei implement etmez, extend eder.
// Herhangi bir Repsonse Model (product, catgeory vs.) oluşturduğumuzda onu RepsonseModel'den extend edeceğiz.
export interface ProductResponseModel extends ResponseModel{
    data:Product[],
}