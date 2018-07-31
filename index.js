// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  result = Math.abs(street - 42);
  return result;
}

function distanceFromHqInFeet(street) {
  distance = distanceFromHqInBlocks(street);
  result = distance * 264;
  return result;
}

function distanceTravelledInFeet(start, end) {
  result = Math.abs((start - end) * 264);
  return result;
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  if (distance < 400) {
    return ""
  }
  
}