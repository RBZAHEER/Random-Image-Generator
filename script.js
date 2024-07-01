const imgcontainer = document.querySelector(".img-container");
const btnel = document.querySelector(".btn");

btnel.addEventListener("click", () => {
  //   console.log("jiii");
  imgnum = 6;
  updateImage();
});

function updateImage() {
  for (let i = 0; i < imgnum; i++) {
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/200/300?random=${Math.random(
      Math.floor() * 1000
    )}`;
    imgcontainer.appendChild(newImg);
  }
}
