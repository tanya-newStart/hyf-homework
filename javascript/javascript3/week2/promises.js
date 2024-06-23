const pizzaPromise = new Promise((resolve, reject) => {
  const dataProcessed = true;
  if (dataProcessed) {
    resolve("data");
  } else {
    reject("error");
  }
});

pizzaPromise.then((data) => console.log(data)).catch((err) => console.log(err));

async function sendRequest() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  console.log(data);
}
sendRequest();
