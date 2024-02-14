let dizel=30, benzin=25, lpg=20; 
const yenisatir="\r\n";

const yakitMetni="1-Dizel"+yenisatir+"2-Benzin"+yenisatir+"3-LPG"+yenisatir+"Lütfen Yakıt Tipini Seçiniz";

let yakitTipi=prompt(yakitMetni);
if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3") {
let yakitLimiti=Number(prompt("Yakıt Limitini Giriniz : "));
let bakiye     =Number(prompt("Bakiyenizi Giriniz : "));

if(yakitTipi=="1") {

    odenecekTutar=yakitLimiti*dizel; 
    if(odenecekTutar<bakiye) {
        bakiye=bakiye-odenecekTutar; 
        alert("Yakıt Alma İşlemi Başarılı"+yenisatir+"Güncel Bakiye : "+bakiye);

    } else {
        alert("Bakiye Yetersiz"+yenisatir+"Ödenecek Tutar :"+odenecekTutar+yenisatir+"Eksik Bakiye : "+(odenecekTutar-bakiye));
    }
}
else if(yakitTipi=="2") {
    odenecekTutar=yakitLimiti*benzin; 
    if(odenecekTutar<bakiye) {
        bakiye=bakiye-odenecekTutar;
        alert("Yakıt Alma İşlemi Başarılı"+yenisatir+"Güncel Bakiye : "+bakiye);

    } else {
        alert("Limit Yetersiz"+yenisatir+"Ödenecek Tutar : "+odenecekTutar+yenisatir+"Eksik Bakiye : "+(odenecekTutar-bakiye));
    }
}
else if(yakitTipi=="3") {

    odenecekTutar=yakitLimiti*lpg; 
    if(odenecekTutar<bakiye) {
        bakiye=bakiye-odenecekTutar;
        alert("Yakıt Alma İşlemi Başarılı"+yenisatir+"Güncel Bakiye : "+bakiye);
        
    } else {
        alert("Limit Yetersiz"+yenisatir+"Ödenecek Tutar : "+odenecekTutar+yenisatir+"Eksik Bakiye : "+(odenecekTutar-bakiye));
    }
}     
}
else {
        alert("Geçerli Bir Yakıt Türü Seçiniz.");
}
