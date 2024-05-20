const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];
const ul = document.getElementById("list");
// Loop through the podcasts
// For every podast:
// Creat an li
// Create an h1 element
// Change the innerHTML of the h1 to equal the name of the current podcast
// Append the h1 to the li
// Now add an image to the li with the src set to the imageUrl. But only if the imageUrl key exists on the object!
// Append the li to the ul

for (let i = 0; i < podcasts.length; i++) {
  const li = document.createElement("li");
  const h1 = document.createElement("h1");
  h1.innerHTML = podcasts[i].name;
  li.appendChild(h1);
  ul.appendChild(li);
  if (podcasts[i].imageUrl) {
    const image = document.createElement("img");
    image.src = podcasts[i].imageUrl;
    li.appendChild(image);
  }
}
