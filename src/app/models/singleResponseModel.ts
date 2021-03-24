import { ResponseModel } from './responseModel';

//! Response Modelinin object versiyonunu olarak oluşturuldu.
//* Api'den dönen cevap içerisinde data olarak tek bir nesne dönüyorsa kullanılır.
//* <T> : Generic -> Çalışacağı veri tipi verilmeli.
export interface SingleResponseModel<T> extends ResponseModel{
    data:T;
}