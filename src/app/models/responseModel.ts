//! Base Response Model -> Api'den gelen verinin dönüş tipini karşılamak için oluşturmuş olduğumuz base Response yapısı
//! Api'deki IDataResult Yapısını modelliyoruz 
export interface ResponseModel{
    success:boolean,
    message:string
}