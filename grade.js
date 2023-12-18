function calculateGrade() {
        // Get user input for student marks
    const marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));

      // Check if the input is within the valid range
      if (isNaN(marks) || marks < 0 || marks > 100) {
        return "Invalid input. Marks should be between 0 and 100.";
    }

}