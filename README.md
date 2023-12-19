# Toy Problems 

## Grade Calculator (grade.js)
- The calculateGrade function takes user input for student marks and determines the corresponding grade based on specified ranges.

## Usage
```
const testMarks = 75;
console.log(calculateGrade(testMarks));
```

## Fuction Explanation
### Get User Input:
- Prompts user input for student marks.
- Converts input to a floating-point number.

### Check Valid Range:
- Validates input within the range 0 to 100.

### Determine Grade:
- Calculates and returns the corresponding grade (A, B, C, D, or E).


## Speed Detector (speed.js)
- The calculateDemeritPoints function computes demerit points based on car speed, considering speed limits and suspension thresholds.

## Usage
```
const testSpeed = 80;
calculateDemeritPoints(testSpeed);
```

## Fucntion Explanation
### Define Constants:
- Constants for speed limit, demerit points, and suspension threshold.

### Check Speed:
- Prints "Ok" and returns 0 if within speed limit.

### Calculate Demerit Points:
- Computes demerit points based on excess speed.

### Check for Suspension:
- Prints "License suspended" if demerit points exceed the threshold.

### Return Demerit Points:
- Returns the calculated demerit points.

## Net Salary Calculator (net-salary.js)
- The calculateNetSalary function computes net salary from basic salary and benefits, considering tax rates and deductions.

## Usage
```
const testBasicSalary = 43000;
const testBenefits = 2580;
const salaryDetails = calculateNetSalary(testBasicSalary, testBenefits);
```

## Function Explanation
### Define Constants:
- Constants for tax rates, NHIF, and NSSF deductions.

### Calculate Gross Salary:
- Adds basic salary and benefits.

### Calculate Deductions:
- Computes payee (tax), NHIF, and NSSF deductions.

### Calculate Net Salary:
- Subtracts deductions from gross salary.

### Return Results:
- Returns an object with detailed salary information.

