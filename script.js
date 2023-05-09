// Inputan
const totalBelanja = 120000;
const uangDibayar = 150000;

let kembalian = uangDibayar - totalBelanja;
let dataTest = document.getElementById("test");

const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(number)
    .split(",")[0];
};

console.log(`Total Belanja`, formatRupiah(totalBelanja).replace("Rp", ""));
console.log(`Bayar dibayar`, formatRupiah(uangDibayar).replace("Rp", ""));
console.log(`Kembalian`, formatRupiah(kembalian).replace("Rp", ""));

let kembalianString = "";
kembalianString += `Kembalian: ${formatRupiah(kembalian).replace(
  "Rp",
  ""
)}<br/>`;
const cekKembalian = (total_belanja, uang_dibayar) => {
  let kembalian = uang_dibayar - total_belanja;
  const pecahan = [
    100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100,
  ];
  const jumlah_pecahan = {};

  for (let nilai of pecahan) {
    if (kembalian >= nilai) {
      const jumlah = Math.floor(kembalian / nilai);
      kembalian = kembalian % nilai;
      jumlah_pecahan[nilai] = jumlah;
    }
  }

  for (let nilai in jumlah_pecahan) {
    console.log(nilai + " = " + jumlah_pecahan[nilai]);
    kembalianString += `${nilai} = ${jumlah_pecahan[nilai]}<br/>`;
  }
};
cekKembalian(totalBelanja, uangDibayar);

dataTest.innerHTML = kembalianString;

// Penjelasan
/*
Fungsi kembalian() di atas sama dengan fungsi yang saya tulis sebelumnya. 
Satu-satunya perbedaan adalah sintaksis JavaScript yang digunakan. 

Dalam fungsi ini, kami menggunakan operator let untuk mendeklarasikan variabel kembalian, 
pecahan, dan jumlah_pecahan. Kami juga menggunakan pernyataan for...of untuk melakukan loop 
melalui setiap nilai pada daftar pecahan. 
Kami juga menggunakan pernyataan for...in untuk melakukan loop 
melalui setiap pasangan nilai dan jumlah pada kamus jumlah_pecahan. 

Untuk menghitung jumlah pecahan yang dibutuhkan, kami menggunakan fungsi Math.floor() 
untuk membulatkan hasil bagi menjadi bilangan bulat terdekat yang lebih kecil atau 
sama dengan hasilnya.
*/
