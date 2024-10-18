// Kullanıcıya kaç adet sayı girmek istediğini soralım.
// Vereceği cevaba göre kullanıcıdan sayıları alalım.
// Cevaplar sayilar dizisine eklensin.
// Kullanıdan alınan sayılar çift ise ayrı toplayıp cevabını yazdıralım, tek ise ayrı toplayıp cevabını yazdıralım.



let sayiAdedi = prompt("kaç adet sayı girmek istiyorsunuz?");

let sayilar = [];
let tekSayi = 0;
let ciftSayi = 0;


for ( let i = 0; i < sayiAdedi; i++) {
    let sayi = parseInt(prompt((i + 1) + ". sayıyı girin:"));
  sayilar.push(sayi);
  if (sayi % 2 === 0) {
    ciftSayi += sayi; // çift sayı= çift sayı + sayı
    
  }else {
    tekSayi += sayi; 
  }
}
console.log(`Çift sayıların toplamı: ${ciftSayi}`);
console.log(`Tek sayıların toplamı: ${tekSayi}`);