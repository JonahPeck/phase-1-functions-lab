// Code your solution in this file!
  function distanceFromHqInBlocks(someValue) {
   if (someValue > 42) {
    return someValue - 42;
   } else {
    return 42-someValue;//returns the number of blocks given a value
  }
}
function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    if (someValue > 42) {
        return (someValue - 42) * 264;
    } else {
        return (42-someValue) * 264;
    }
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start > destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400 ) {
        return 0;
    } else if (distance >= 400 && distance <= 2000) {
        return ((distance - 400)*.02);
    } else if ((distance >= 2000) && (distance <= 2500)){
        return 25;
    } else ((distance) > 2500) 
        return "cannot travel that far";
    }

    