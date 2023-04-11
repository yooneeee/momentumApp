const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.png",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.png",
  "27.png",
  "28.png",
  "29.png",
  "30.png",
];
//const BG = "background";

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//bgImage.className = BG;
bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url("img/${chosenImage}")`;
//document.body.appendChild(bgImage); //append:가장 아래에, prepend: 가장 위에 오게 함
//bgImage.id = "bgImage";

/*
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100vh;
  height: 100vh;
  padding-top: 200px;
  font-family: "Baloo Tammudu 2", "Noto Sans KR", sans-serif;
  background-repeat: no-repeat;
  background-size: cover;
}

#bgImage {
  position: absolute;
  left: 0;
  top: 0;
  right: 0px;
  bottom: 0px;
  height: 100vh;
  width: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 100%;
  max-height: 100%;
  min-width: 1880px;
  min-height: 1200px;
  z-index: -5;
  filter: brightness(70%);
}
*/
