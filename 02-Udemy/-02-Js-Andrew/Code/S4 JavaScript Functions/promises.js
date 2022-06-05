const getDataBack = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callback(undefined, num * 2);
    } else {
      callback("An error has take a place", undefined);
    }
  }, 2000);
};

getDataBack(2, (error, data) => {
  if (error) {
    console.log("Error");
  } else {
    getDataBack(data, (error, data) => {
      if (error) {
        console.log("Error");
      } else {
        console.log(data);
      }
    });
  }
});

const getDataPromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number" ? resolve(num * 2) : reject("Invalid value");
    }, 2000);
  });
};

getDataPromise(2).then(
  (data) => {
    getDataPromise(data).then(
      (data) => {
        console.log(`Promise data : ${data}`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

getDataPromise(10).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})