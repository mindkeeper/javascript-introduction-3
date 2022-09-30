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

const showMonts = (state, data) => {
  if (data.length != 0)
    return console.log(data.map((e, i) => (e = `${i + 1}: ${e}`)));
  else return console.log(state);
};

getMonths(showMonts);
