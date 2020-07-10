const languageInput = document.getElementById("language");

languageInput.addEventListener("keyup", (e) => {
  const myLanguage = e.target.value;
  const myUrl = `https://restcountries.eu/rest/v2/lang/${myLanguage}`;

  var myFriends = [];
  const friendList = document.getElementById("myCountries");

  fetch(myUrl)
    .then((response) => {
      response.json().then((data) => {
        for (let i = 0; i < data.length; i++) {
          myFriends.push(data[i].name);
        }

        myFriends.forEach((element) => {
          const row = document.createElement("tr");

          row.innerHTML = `
          <td class="text-dark">${element}</td>
          <td><a
          href="https://${myLanguage}.wikipedia.org/wiki/${element}"
          class="btn btn-info text-light"
          >Learn about their country!
        </a>`;

          friendList.append(row);
        });

        document.getElementById("language").innerText = myFriends;
        const countriesElement = document.getElementById("language");
        countriesElement.innerHTML = `
        <div>${myFriends}</div>`;
      });
    })
    .catch((err) => {
      console.log("oh no", err);
    });
  e.preventDefault();
});

languageInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 8) location.reload();
});
