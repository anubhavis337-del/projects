// fetch("./data.json")
// .then(response =>response.json())
// .then(data => console.log(data))

let form = document.getElementById("form");
const user = document.getElementById("user");
const pass = document.getElementById("pass");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (user.value === "anu@gmail.com" && pass.value === "1234") {
      window.location.href = "superhero.html";
    } else {
      message.textContent = "Invalid username or password...!!";
    }
  });
}
const results = [
  {
    name: "SpiderMan",
    image: "https://images.unsplash.com/photo-1635863138275-d9b33299680b",
    description:
      "A young superhero with spider-like abilities who protects New York City.",
    tagline: "With great power comes great responsibility.",
  },
  {
    name: "IronMan",
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3",
    description:
      "A genius inventor who fights evil using his advanced armored suit.",
    tagline: "I am Iron Man.",
  },
  {
    name: "Batman",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb",
    description:
      "A skilled detective and crime fighter who protects Gotham City.",
    tagline: "I am vengeance. I am the night.",
  },
  {
    name: "Superman",
    image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
    description:
      "A powerful hero from Krypton who uses his abilities to protect humanity.",
    tagline: "Truth, Justice, and a Better Tomorrow.",
  },
  {
    name: "WonderWoman",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    description:
      "An Amazonian warrior who fights for peace, justice, and equality.",
    tagline: "Courage is contagious.",
  },
];

let searchBtn = document.getElementById("searchBtn");
const searchinput = document.getElementById("searchinput");
const heroResults = document.getElementById("heroResults");

if (searchinput && searchBtn && heroResults) {
  searchBtn.addEventListener("click", function () {
    const name = searchinput.value.toLowerCase();
    console.log(searchBtn, searchinput);

    const hero = results.find(function (item) {
      return item.name.toLowerCase() === name;
    });

    if (hero) {
      heroResults.innerHTML = `
      <div class="hero-card">
      <h2>${hero.name}</h2>
      <img src="${hero.image}" alt="${hero.name}">
      <p>${hero.description}</p>
      <p>${hero.tagline}</P>

      `;
    } else {
      heroResults.textContent = "superhero not found...!!";
    }
  });
}
