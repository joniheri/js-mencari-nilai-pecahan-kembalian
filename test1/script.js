const totalBelanja = 110000;
const bayar = 150000;
let kembalian = bayar - totalBelanja;
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
console.log(`Bayar`, formatRupiah(bayar).replace("Rp", ""));
console.log(`Kembalian`, formatRupiah(kembalian).replace("Rp", ""));

let uangKembalian = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500];

let jumlahKembalian = 0;
let kembalianString = "";

const cekKembalian = () => {
  kembalianString += `Total Belanja: ${formatRupiah(totalBelanja)}<br/>`;
  kembalianString += `Uang yang dibayar: ${formatRupiah(kembalian)}<br/>`;
  kembalianString += `Kembalian: ${formatRupiah(kembalian)}<br/>`;
  kembalianString += `<br/>Uang Kembalian: <br/>`;
  if (uangKembalian[uangKembalian.indexOf(kembalian)] === kembalian) {
    kembalianString += `${formatRupiah(
      uangKembalian[uangKembalian.indexOf(kembalian)]
    )} = 1`;
  } else {
    const maxArray = Math.max.apply(null, uangKembalian);
    for (let i = 0; i < uangKembalian.length; i++) {
      let jmlLembarUang = uangKembalian[i]++;
      let hasil = uangKembalian[i] + uangKembalian[i];
      if (kembalian === hasil) {
        return console.log(
          `Hasil Disini: `,
          formatRupiah(hasil).replace("Rp", "") + " " + jmlLembarUang
        );
      }
    }
  }
};
cekKembalian();

dataTest.innerHTML = kembalianString;
