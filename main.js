const container = document.getElementById("container");
const body = document.querySelector("body");

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

//sqrtOfHW is the root of height^2 + width^2
const sqrtOfHW = Math.sqrt(widthPixels ** 2 + heightPixels ** 2);

console.log("Sqrt: " + sqrtOfHW);

const roundedSqrt = Math.round(sqrtOfHW);

//the diagionalscreensize is hardcoded but the idea is that to get it externally

const diagonalScreenSize = 9.7;

const averagePD = 62;

const dpi = Math.floor((roundedSqrt / diagonalScreenSize) * 10) / 10;

console.log("dpi " + dpi);

const mmWidth = Math.floor(((widthPixels * 25.4) / dpi) * 10) / 10;

const mmHeigth = Math.floor(((heightPixels * 25.4) / dpi) * 10) / 10;

const pPI = (dpr * sqrtOfHW) / diagonalScreenSize;

const ppm = Math.floor(pPI) / 25.4;

const mmpx = 25.4 / Math.floor(pPI);

console.log("PPI " + Math.floor(pPI));

console.log("mm width " + mmWidth);

console.log("mm height " + mmHeigth);

console.log("px per mm delat dpr " + ppm / dpr);

console.log("mm per px gånger dpr " + mmpx * dpr);

function createAndAppen() {
  let p = document.createElement("p");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");
  let p7 = document.createElement("p");
  p.innerText = "mm width " + mmWidth;
  p1.innerText = "mm height " + mmHeigth;
  p2.innerText = "ppi test " + pPI;
  p3.innerText = "dpi " + dpi;
  p4.innerText = "width in pixels " + widthPixels;
  p5.innerText = "height in pixels " + heightPixels;

  p6.innerText = "px per mm delat dpr " + ppm / dpr;
  p7.innerText = "mm per px gånger dpr " + mmpx * dpr;
  container.append(p, p1, p2, p3, p4, p5, p6, p7);
}

createAndAppen();

const physicalmm30 = (ppm / dpr) * 30;
for (let i = 0; i < 2; i++) {
  const circle = document.createElement("div");
  const innerCircle = document.createElement("div");

  innerCircle.id = "innerCirlce" + i;
  circle.id = "circle" + i;

  circle.style.width = `${physicalmm30}px`;
  circle.style.height = `${physicalmm30}px`;
  //   circle.style.marginLeft = `${distanceFromPd}px`;
  //   circle.style.marginRight = `${distanceFromPd}px`;

  document.body.append(circle);
  circle.append(innerCircle);
}

const circle0 = document.getElementById("circle0");
const circle1 = document.getElementById("circle1");
const distanceFromPd = ((ppm / dpr) * averagePD) / 2;
const distancePdMinusCirclesize = distanceFromPd - physicalmm30 / 2;
console.log(distanceFromPd);
console.log(distancePdMinusCirclesize);

circle0.style.marginRight = `${distancePdMinusCirclesize}px`;
circle1.style.marginLeft = `${distancePdMinusCirclesize}px`;
