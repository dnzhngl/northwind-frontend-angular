//!Piper : elindeki datayı farklı şekilde göstermek istiyorsan anguların built-in özelliği olan pipe'lar kullanılabilir. Ayrıca custom pipe'lar da yazılabilir.
//* Custom Pipe

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {
//* unkonwn : any gibi bir tip. bilinmeyen anlamına geliyor. 
//! value: pipe'ın değiştirmeye çalıştığı değer. 
//! arg /rate yaptık-> parametreler, pipe'ın kullanıldığı yerde gönderilen parametreler args olarak tutuluyor.
  transform(value: number, rate: number): number { 
    return value + (value * rate / 100);  // ürünün kdv dahil fiyat hesabı
  }

}
