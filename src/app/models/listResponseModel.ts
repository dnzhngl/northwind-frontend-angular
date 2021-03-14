import { ResponseModel } from './responseModel';

//! Response Modelinin liste versiyonunu olarak oluşturuldu.
//* Api'den dönen data belirli bir yapıda/standartda dönüyorsa, liseteler içinde belirli bir yapı var ise, dönen data içerisindeki liste yapısı generic bir List Response Model ile karşılanabilir.
//* <T> : Generic -> Çalışacağı veri tipi verilmeli.
export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}