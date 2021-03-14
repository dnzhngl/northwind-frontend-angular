//! Backend'de yazmış olduğumuz Entity ve Dtolara karşılık gelen modeller oluşturulur. Backendden gelen dataların Client tarafında karşılığının oluşturulması gerekir.
//! Api'den gelen ProductResponse'un datasına karşılık gelen nesne
// *TypeScript'te Apiden gelen datayı sınırandırmak için class yerine interface kullanıyoruz. Class kullanıldığı zaman, bu classın çağırıldığı yerde her alan girilmese de uyarmaz, ancak interface kullandığımız zaman, bu interfacein kullanıldığı yerde herhangi bir field boş bırakılırsa uyarır/hata verir.
//* export : backend'teki access modifierlardan public'e eş gelir.
export interface Product{
    productId:number;   // sayısal değeri olan her veri tipinin karşılığı TypeScript'te number'dır.
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice: number;
}