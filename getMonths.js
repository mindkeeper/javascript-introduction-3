const getMonths = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Agust",
      "September",
      "October",
      "November",
      "December",
    ];

    if (!error) callback(null, month);
    else callback(new Error("Sorry Data Not Found"), []);
  }, 400);
};

const showMonths = (error, data) => {
  // nama variabel salah jangan lupa dicek.
  if (!error) return console.log(data.map((e, i) => `${i + 1}: ${e}`));
  return console.log(error.message); // gausah pake else, ini juga salah harusnya errpr.message
};

getMonths(showMonths);
