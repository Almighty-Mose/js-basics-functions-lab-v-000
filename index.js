// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  result = Math.abs(street - 42);
  return result
}

function distanceFromHqInFeet(street) {
  distance = distanceFromHqInBlocks(street);
  result = distance * 264
  return result
}