import { ResponseModel } from './responseModel';
import { Product } from "./products";

//! Api'deki IDataResult Yapısını modelliyoruz. ancak success ve message kısımlarını responseModel'den alıyoruz. 
//* interface interface'i implement etmez, extend eder (genişletir).
//* Herhangi bir Repsonse Model (product, catgeory vs.) oluşturduğumuzda onu RepsonseModel'den extend edeceğiz.
export interface ProductResponseModel extends ResponseModel{
    data:Product[],
}