const container = document.getElementById("container");

const widthPixels = window.screen.width;

const heightPixels = window.screen.height;

const dpr = window.devicePixelRatio || 1;

console.log("width in pixels " + widthPixels);

console.log("height in pixels " + heightPixels);

console.log("dpr " + dpr);

// const dpi = Math.round(
//   Math.sqrt(
//     ((heightPixels * dpr) / 25.4) ** 2 + ((widthPixels * dpr) / 25.4) ** 2
//   )
// );

//sqrtOfHW står för roten ur höjden^2 + bredden^2
const sqrtOfHW = Math.sqrt(widthPixels ** 2 + heightPixels ** 2);

console.log(sqrtOfHW);

const roundedSqrt = Math.round(sqrtOfHW);

const dpi = Math.floor((roundedSqrt / 6.06) * 10) / 10;

console.log("dpi " + dpi);

const mmWidth = Math.floor(((widthPixels * 25.4) / dpi) * 10) / 10;

const mmHeigth = Math.floor(((heightPixels * 25.4) / dpi) * 10) / 10;

const pPI = Math.sqrt(widthPixels ** 2 + heightPixels ** 2) / 6.06;

console.log("PPI " + pPI);

console.log("mm width " + mmWidth);

console.log("mm height " + mmHeigth);

console.log("height goal in mm is 298.1");

console.log("width goal in mm is 528.6");

function createAndAppen() {
  let p = document.createElement("p");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  p.innerText = "mm width " + mmWidth;
  p1.innerText = "mm height " + mmHeigth;
  p2.innerText = "ppi test" + pPI;
  p3.innerText = "dpi " + dpi;
  container.append(p, p1, p2, p3);
}

createAndAppen();
