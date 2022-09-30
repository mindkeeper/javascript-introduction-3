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
          return failed(new Error("Invalid Login Credentials"));
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
  if (!username && typeof username !== "string")
    return "Input Username Invalid";
  if (!password && typeof password !== "string")
    return "Input Password Invalid";
  if (!order || typeof order !== "string") return "Input order Invalid";
  if (typeof loginCb !== "function" || typeof orderCb !== "function")
    return "Invalid callback param";

  try {
    const login = await loginCb(username, password);
    await orderCb(order);
    return `Hello ${login.username} Your ${order} Has Been Submitted`;
  } catch (error) {
    return error.message;
  } finally {
    console.log("Loading Complete");
  }
};

const doOrder = async () =>
  console.log(await newOrder("abcd", "12345", "nangka", loginAPI, createOrder));
doOrder();
