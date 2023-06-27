// const formData = { dogName: "Druski", dogBreed: "Poodle" };

// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };
// fetch("http://localhost:3000/dogs", configurationObject)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => {
//     alert("Bad Things! Ragnarok!");
//     console.log(error.message);
//   });

document.addEventListener("DOMContentLoaded", async function () {
  const response = await submitData("Steve", "steve@steve.com");
  return response;
});

function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: userName, email: userEmail }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.body.innerHTML = `${data.id}`;
    })
    .catch((error) => {
      document.body.innerHTML = `${error.message}`;
    });
}
