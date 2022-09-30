const searchManufacture = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name || typeof name !== "string")
        return reject(new Error("Input Invalid"));
      const manufactureList = [
        {
          name: "Lamborghini",
          products: [
            {
              carName: "Lamborghini Aventador Coupe LP740-4",
              releaseYear: 2017,
            },
            { carName: "Lamborghini Huracan", releaseYear: 2015 },
            { carName: "Lamborghini Urus", releaseYear: 2019 },
          ],
        },
        {
          name: "Chevrolet",
          products: [
            { carName: "Bolt", releaseYear: 2017 },
            { carName: "Menlo", releaseYear: 2020 },
            { carName: "Spark", releaseYear: 2002 },
          ],
        },
      ];
      const manufacture = manufactureList.find(
        (item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      );
      if (manufacture) return resolve(manufacture.products);
      return reject(new Error("Manufacture Not Found!"));
    }, 1000);
  });
};

searchManufacture("")
  .then((product) => console.log(product))
  .catch((error) => console.log(error.message));
