//Calculate the demerit points
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const demeritPointsPer5KmOver = 1;
    const pointsThresholdForSuspension = 12;

    if (speed < speedLimit) {
        console.log("Ok");
        return 0; 
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5) * demeritPointsPer5KmOver;

        console.log(`Points: ${demeritPoints}`);

        if (demeritPoints > pointsThresholdForSuspension) {
            console.log("License suspended");
        }

        return demeritPoints;
    }
}

// Testing the speed
const testSpeed = 80; 

calculateDemeritPoints(testSpeed);
