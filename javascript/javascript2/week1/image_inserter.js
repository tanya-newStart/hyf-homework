// Image inserter
// Create a function that has two parameters: imageUrl and elementToAppendImageTo. The function should create an img tag and set the src attribute of the img to the imageUrl parameter. The function should then append the img to the elementToAppendImageTo - html element.

// // Should append a img tag to the body with the picture from 'https://picsum.photos/536/354'
// notThisFunctionName('https://picsum.photos/536/354', document.querySelector('body'));
function insertImage(imageUrl, elementToAppendImageTo) {
  const img = document.createElement("img");
  img.src = imageUrl;
  elementToAppendImageTo.appendChild(img);
}

insertImage("https://picsum.photos/536/354", document.querySelector("body"));
