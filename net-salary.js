function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.1; 
    const nhifRate = 0.05; 
    const nssfRate = 0.06; 

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate payee (tax)
    const payee = grossSalary * taxRate;

    // Calculate NHIF deductions
    const nhifDeductions = grossSalary * nhifRate;

    // Calculate NSSF deductions
    const nssfDeductions = grossSalary * nssfRate;

    // Calculate net salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    // Return the results
    return {
        grossSalary,
        payee,
        nhifDeductions,
        nssfDeductions,
        netSalary
    };
}

// Testing the values
const testBasicSalary = 43000; 
const testBenefits = 2580;

const salaryDetails = calculateNetSalary(testBasicSalary, testBenefits);

// Display the results
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("Payee (Tax):", salaryDetails.payee);
console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
console.log("Net Salary:", salaryDetails.netSalary);
