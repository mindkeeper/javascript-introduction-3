const checkWorkDay = (day) => {
  //if(!day && typeof day !== "string") return "Input Invalid" // ini digunakan di dalem promise aja?
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      const cek = dataDay.find(
        (item) => item.toLocaleLowerCase() === day.toLocaleLowerCase()
      );
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja")); //tadi malem soalnya keubah ada returnnya dan gausah pake else
      }
    }, 1000);
  });
};

checkWorkDay("jumat")
  .then((day) => console.log(`${day} adalah hari kerja`))
  .catch((error) => console.log(error.message))
  .finally(() => console.log("Load Completed"));

const check = async (search, cb) => {
  try {
    if (!search || typeof search !== "string")
      throw new Error("Invalid search Input");
    if (typeof cb !== "function") throw new Error("Invalid callback param");
    const response = await cb(search);
    return `${response} adalah hari kerja`;
  } catch (error) {
    return error.message;
  }
};

const doCheck = async () => console.log(await check("minggu", checkWorkDay));

doCheck();
/*pengguaan then catch digunakan pada object promise. 
then akan mengambil parameter resolve dan reject(optional) pada promise || then((onSuccess, onError)=>)
pada contoh diatas then digunakan untuk mengambil hasil resolve dari promise yang dinamakan parameter day
sedangkan catch digunakan untuk mengambil hasil reject dari promise yang digunakan
finally digunakan ketika then atau catch terpanggil

try catch fungsinya hampir sama dengan then catch.blok try akan melakukan sesuatu yang diperintahkan. jika dia jalan maka akan lanjut, ||bukan jalan tapi success||
jika error maka errornya masuk ke catch
pada cotoh diatas digunakan fungsi async await untuk melakukan pengecekan hari kerja. cb yang diberikan adalah fungsi checkWorkday.
jika hasil callback adalah resolve maka fungsi dalam try akan berlanjut. jika tidak maka error akan di catch dan di return
*/
