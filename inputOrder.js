//algoritma
//bikin fungsi login api dan create order

const loginAPI = (username, password) => {
  return new Promise((success, failed) => {
    setTimeout(() => {
      const loginResponse = {
        username,
        password,
      };
      const userList = [
        { username: "abcd", password: "12345" },
        { username: "12345", password: "abcd" },
      ];
      for (user of userList) {
        if (
          user.username === loginResponse.username &&
          user.password === loginResponse.password
        ) {
          return success(user);
        } else {
          return failed(new Error("Invalid Login Credentials")); // gausah pake else karena udah ada pengecekan untuk success
        }
      }
    }, 1000);
  });
};

const createOrder = (order) => {
  return new Promise((success, failed) => {
    setTimeout(() => {
      const sellingList = ["mangga", "jeruk", "pisang"];
      const cekSelling = sellingList.find(
        (item) => item.toLocaleLowerCase() === order.toLocaleLowerCase()
      );
      if (cekSelling) return success(cekSelling);
      return failed(new Error("Barang tidak dijual"));
    }, 1000);
  });
};

const newOrder = async (username, password, order, loginCb, orderCb) => {
  try {
    if (!username && typeof username !== "string")
      throw new Error("Input Username Invalid");
    if (!password && typeof password !== "string")
      throw new Error("Input Password Invalid");
    if (!order || typeof order !== "string")
      throw new Error("Input order Invalid");
    if (typeof loginCb !== "function" || typeof orderCb !== "function")
      throw new Error("Invalid callback param");
    const login = await loginCb(username, password);
    const ordered = await orderCb(order); // gunakan output dari callback const ordered = orderCb(order)
    return `Hello ${login.username} Your ${ordered} Has Been Submitted`; //${order} diganti ke ${ordered}
  } catch (error) {
    return error.message;
  }
};

const doOrder = async () =>
  console.log(await newOrder("abcd", "12345", "pisang", loginAPI, createOrder));
doOrder();
