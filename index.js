// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    // Scuber's headquarters is on 42nd Street
    const hqLocation = 42;
    // Calculate the distance in blocks
    return Math.abs(pickupLocation - hqLocation);
}
function distanceFromHqInFeet(pickupLocation) {
    const blocks =
    distanceFromHqInBlocks(pickupLocation);
    return blocks * 264

}
function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const blocksTravelled =
    (destination - start);
    return  Math.abs (blocksTravelled * 264);

  }


  function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }


