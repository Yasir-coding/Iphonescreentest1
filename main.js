// container is the div where the values are displayed and connected to the function further down that also is commented.

// const container = document.getElementById("container");

const widthInPixels = window.screen.width;

const heightInPixels = window.screen.height;

const devicePixelRatio = window.devicePixelRatio || 1;

//the diagonalPhysicalScreenSize(inches) is hardcoded but the idea is that to get it externally
const diagonalPhysicalScreenSize = 5.5;

// Average pupil distance is hardcoded and the idea is that the user is supposed to submit.
const averagePupilDistance = 62;

//1 physical inch is equivalent to 25.4 physical milimeters
const inchesToMilimeter = 25.4;

// diagonalInPixels is the squareroot of heigth and width in pixels
const diagonalInPixels = Math.sqrt(widthInPixels ** 2 + heightInPixels ** 2);

// Reason for * 10 / 10 is so that the decimals is placed in th correct manner.
const dotsPerInch =
  Math.floor((diagonalInPixels / diagonalPhysicalScreenSize) * 10) / 10;

// To calculate the physical width in milimeter this formula is used. width in pixels times(*) inches to milimeter(24.5) then divided by dots per inch.
// And the * 10/10 is used to get the decimals in correct manner
const physicalWidthInMilimeter =
  Math.floor(((widthInPixels * inchesToMilimeter) / dotsPerInch) * 10) / 10;

// To calculate the physical heigth in milimeter this formula is used. heigth in pixels times(*) inches to milimeter(24.5) then divided by dots per inch.
// And the * 10/10 is used to get the decimals in correct manner
const physicalHeigthInMilimeter =
  Math.floor(((heightInPixels * inchesToMilimeter) / dotsPerInch) * 10) / 10;

// To calculate pixels per inch formula. Device pixel ratio times(*) diagonal in pixel the divided by the physical diagonal size in inches.
// Pixel per inch is the same as pixel density, just a different term.
const pixelsPerInch =
  (devicePixelRatio * diagonalInPixels) / diagonalPhysicalScreenSize;

// To calculate pixels per milimeter you divide pixels per inch by inches to milimeter
const pixelsPerMilimeter = Math.floor(pixelsPerInch) / inchesToMilimeter;

// To calculate Milimeter per pixel you divide inches to milimeter by pixel per inch
const milimetersPerPixel = inchesToMilimeter / Math.floor(pixelsPerInch);

// Logical pixels per milimeter is the number of logical pixels presented in one milimeter ocf screen space
const logicalPixelsPerMilimeter = pixelsPerMilimeter / devicePixelRatio;

console.log("PPI " + Math.floor(pixelsPerInch));

console.log("mm width " + physicalWidthInMilimeter);

console.log("mm height " + physicalHeigthInMilimeter);

console.log("px per mm delat dpr " + pixelsPerMilimeter / devicePixelRatio);

console.log("mm per px gånger dpr " + milimetersPerPixel * devicePixelRatio);

// physicalMilimeterFromInput is the physical milimeters added by the hardcoded value(30).
//The reason for the value 30 is that the circles diameter is supposed to be 30 physical milimeters.
const physicalMilimeterFromInput = milimetersPerPixel * 30;

// The loop creates two outer and two inner divs and given id's.
// The shape is modified with CSS in external css file and the size is modified with the css in js.
for (let i = 0; i < 2; i++) {
  const circle = document.createElement("div");
  const innerCircle = document.createElement("div");

  innerCircle.id = "innerCirlce" + i;
  circle.id = "circle" + i;

  circle.style.width = `${physicalMilimeterFromInput}px`;
  circle.style.height = `${physicalMilimeterFromInput}px`;

  document.body.append(circle);
  circle.append(innerCircle);
}

const circle0 = document.getElementById("circle0");
const circle1 = document.getElementById("circle1");
const distanceFromPd = (milimetersPerPixel * averagePupilDistance) / 2;
const distancePdMinusCirclesize =
  distanceFromPd - physicalMilimeterFromInput / 2;

circle0.style.marginRight = `${distancePdMinusCirclesize}px`;
circle1.style.marginLeft = `${distancePdMinusCirclesize}px`;

// the commented code below is to display the different values on the screen.

// function createAndAppen() {
//   let p = document.createElement("p");
//   let p1 = document.createElement("p");
//   let p2 = document.createElement("p");
//   let p3 = document.createElement("p");
//   let p4 = document.createElement("p");
//   let p5 = document.createElement("p");
//   let p6 = document.createElement("p");
//   let p7 = document.createElement("p");
//   p.innerText = "mm width " + mmWidth;
//   p1.innerText = "mm height " + mmHeigth;
//   p2.innerText = "ppi test " + pPI;
//   p3.innerText = "dpi " + dpi;
//   p4.innerText = "width in pixels " + widthPixels;
//   p5.innerText = "height in pixels " + heightPixels;

//   p6.innerText = "px per mm delat dpr " + ppm / dpr;
//   p7.innerText = "mm per px gånger dpr " + mmpx * dpr;
//   container.append(p, p1, p2, p3, p4, p5, p6, p7);
// }

// createAndAppen();
