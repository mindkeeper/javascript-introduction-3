const checkWorkDay = (day) => {
  //if(!day && typeof day !== "string") return "Input Invalid"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      const cek = dataDay.find(
        (item) => item.toLocaleLowerCase() === day.toLocaleLowerCase()
      );
      if (cek) {
        return resolve(cek);
      } else {
        return reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 1000);
  });
};

// checkWorkDay("jumat")
//   .then((day) => console.log(`${day} adalah hari kerja`))
//   .catch((error) => console.log(error.message))
//   .finally(() => console.log("Load Completed"));

const check = async (search, cb) => {
  try {
    const response = await cb(search);
    return `${response} adalah hari kerja`;
  } catch (error) {
    return error.message;
  }
};

const doCheck = async () => console.log(await check("minggu", checkWorkDay));

doCheck()
/*pengguaan then catch digunakan ketika return value dari sebuah fungsi adalah promise. 
then akan mengambil parameter resolve pada promise sedangkan catch
pada contoh diatas then digunakan untuk mengambil hasil rsolve dari promise yang dinamakan parameter day
sedangkan catch digunakan untuk mengambil hasil reject dari promise yang digunakan
finally digunakan ketika then atau catch terpanggil

try catch fungsinya hampir sama dengan then catch.blok try akan melakukan sesuatu yang diperintahkan. jika dia jalan maka akan lanjut, 
jika error maka errornya masuk ke catch
pada cotoh diatas digunakan fungsi async await untuk melakukan pengecekan hari kerja. cb yang diberikan adalah fungsi checkWorkday.
jika hasil callback adalah resolve maka fungsi dalam try akan berlanjut. jika tidak maka error akan di catch dan di return
*/
