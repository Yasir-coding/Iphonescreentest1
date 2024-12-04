const container = document.getElementById("container");

let diagonalPhysicalScreenSizeInput;
let pupilDistanceInput;

document.getElementById("mainForm").addEventListener("submit", (event) => {
  event.preventDefault();
  diagonalPhysicalScreenSizeInput = document.getElementById("screenSize").value;
  pupilDistanceInput = document.getElementById("pupilDistance").value;
  console.log(pupilDistanceInput);
  container.innerHTML = "";
  calculate();
});

function calculate() {
  const widthInPixels = window.screen.width;
  console.log("width in pixels: " + widthInPixels);

  const heightInPixels = window.screen.height;
  console.log("height in pixels: " + heightInPixels);

  const devicePixelRatio = window.devicePixelRatio || 1;
  console.log("Device pixel ratio: " + devicePixelRatio);

  //the diagonalPhysicalScreenSize(inches) is hardcoded but the idea is that to get it externally
  const diagonalPhysicalScreenSize =
    diagonalPhysicalScreenSizeInput !== undefined
      ? diagonalPhysicalScreenSizeInput
      : 6.06;

  // Average pupil distance is hardcoded and the idea is that the user is supposed to submit.
  const averagePupilDistance =
    pupilDistanceInput !== undefined ? pupilDistanceInput : 62;

  //1 physical inch is equivalent to 25.4 physical milimeters
  const inchesToMilimeter = 25.4;

  // diagonalInPixels is the squareroot of heigth and width in pixels
  const diagonalInPixels = Math.sqrt(widthInPixels ** 2 + heightInPixels ** 2);
  console.log("diagonal in pixels: " + diagonalInPixels);

  // Reason for * 10 / 10 is so that the decimals is placed in th correct manner.
  const dotsPerInch =
    Math.floor((diagonalInPixels / diagonalPhysicalScreenSize) * 10) / 10;
  console.log("dots per inch: " + dotsPerInch);

  // To calculate the physical width in milimeter this formula is used. width in pixels times(*) inches to milimeter(24.5) then divided by dots per inch.
  // And the * 10/10 is used to get the decimals in correct manner
  const physicalWidthInMilimeter =
    Math.floor(((widthInPixels * inchesToMilimeter) / dotsPerInch) * 10) / 10;
  console.log("Physical width in milimeter: " + physicalWidthInMilimeter);

  // To calculate the physical heigth in milimeter this formula is used. heigth in pixels times(*) inches to milimeter(24.5) then divided by dots per inch.
  // And the * 10/10 is used to get the decimals in correct manner
  const physicalHeigthInMilimeter =
    Math.floor(((heightInPixels * inchesToMilimeter) / dotsPerInch) * 10) / 10;
  console.log("Physical heigth in milimeter: " + physicalHeigthInMilimeter);

  // To calculate pixels per inch formula. Device pixel ratio times(*) diagonal in pixel the divided by the physical diagonal size in inches.
  // Pixel per inch is the same as pixel density, just a different term.
  const pixelsPerInch =
    (devicePixelRatio * diagonalInPixels) / diagonalPhysicalScreenSize;
  console.log("Pixels per inch: " + Math.floor(pixelsPerInch));

  // To calculate pixels per milimeter you divide pixels per inch by inches to milimeter
  const pixelsPerMilimeter = Math.floor(pixelsPerInch) / inchesToMilimeter;

  // To calculate Milimeter per pixel you divide inches to milimeter by pixel per inch
  const milimetersPerPixel = inchesToMilimeter / Math.floor(pixelsPerInch);
  console.log("milimeters per pixel: " + milimetersPerPixel);
  console.log(
    "milimeters per pixel divided by device ratio: " +
      milimetersPerPixel * devicePixelRatio
  );

  // Logical pixels per milimeter is the number of logical pixels presented in one milimeter ocf screen space
  const logicalPixelsPerMilimeter = pixelsPerMilimeter / devicePixelRatio;
  console.log("Logical pixels per milimeter: " + logicalPixelsPerMilimeter);

  console.log("mm per px gånger dpr: " + milimetersPerPixel * devicePixelRatio);

  // physicalMilimeterFromInput is the physical milimeters added by the hardcoded value(30).
  //The reason for the value 30 is that the circles diameter is supposed to be 30 physical milimeters.
  const physicalMilimeterFromInput = logicalPixelsPerMilimeter * 30;
  console.log("physical milimeter from input: " + physicalMilimeterFromInput);

  // The loop creates two outer and two inner divs and given id's.
  // The shape is modified with CSS in external css file and the size is modified with the css in js.

  for (let i = 0; i < 2; i++) {
    const circle = document.createElement("div");
    const innerCircle = document.createElement("div");

    innerCircle.id = "innerCirlce" + i;
    circle.id = "circle" + i;

    circle.style.width = `${physicalMilimeterFromInput}px`;
    circle.style.height = `${physicalMilimeterFromInput}px`;

    container.append(circle);
    circle.append(innerCircle);
  }

  const circle0 = document.getElementById("circle0");
  const circle1 = document.getElementById("circle1");

  // To calculate the average physical pupil distance(62 milimeters) the formula is logical pixel per milimeter times average pupil distance.
  // Reason behind the "divide by 2" is to get the distance from the middle point between your eyes to one of the eye
  const distanceFromMiddleToOneEye =
    (logicalPixelsPerMilimeter * averagePupilDistance) / 2;
  console.log("distanceFromMiddleToOneEye: " + distanceFromMiddleToOneEye);

  // Distance pupil distance minus circle size is to get the distance for one eye minus the circles radius for placement for the circles.
  const distancePdMinusCirclesize =
    distanceFromMiddleToOneEye - physicalMilimeterFromInput / 2;
  console.log("distancePdMinusCirclesize: " + distancePdMinusCirclesize);

  // Pushes each circle with the correct value to each side from the center
  circle0.style.marginRight = `${distancePdMinusCirclesize}px`;
  circle1.style.marginLeft = `${distancePdMinusCirclesize}px`;
}
