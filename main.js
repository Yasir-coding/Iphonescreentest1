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

const pPI = (dpr * sqrtOfHW) / 6.06;

const ppm = Math.floor(pPI) / 25.4;

const mmpx = 25.4 / Math.floor(pPI);

console.log("PPI " + Math.floor(pPI));

console.log("mm width " + mmWidth);

console.log("mm height " + mmHeigth);

console.log("height goal in mm is 298.1");

console.log("width goal in mm is 528.6");

console.log("px per mm delat dpr " + ppm / dpr);

console.log("mm per px gånger dpr " + mmpx * dpr);

function createAndAppen() {
  let p = document.createElement("p");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let p5 = document.createElement("p");
  p.innerText = "mm width " + mmWidth;
  p1.innerText = "mm height " + mmHeigth;
  p2.innerText = "ppi test " + pPI;
  p3.innerText = "dpi " + dpi;
  p4.innerText = "width in pixels " + widthPixels;
  p5.innerText = "height in pixels " + heightPixels;
  container.append(p, p1, p2, p3, p4, p5);
}

createAndAppen();

const circle = document.getElementById("circle");

const physicalmm30 = (ppm / dpr) * 30;
console.log(physicalmm30);
console.log(physicalmm30 * 0.66);

circle.style.width = `${physicalmm30 * 0.66}px`;

circle.style.height = `${physicalmm30 * 0.66}px`;
