
document.addEventListener('DOMContentLoaded', function() {
    const donate = document.querySelector('.donate');
    donate.addEventListener('click', calculate);

    function calculate() {
        // Get the value from the input field with the id "example"
        const inputValue = document.getElementById('example').value;

        // Convert the string to a number
        const number = parseFloat(inputValue);

        // Check if the input is a valid number
        if (!isNaN(number)) {
            // Round the result to 2 decimal places (you can adjust this as needed)
            const result = number / 36000;
            // Update the text content of the strong element with id "number-of-pet-food"
            document.getElementById('number-of-pet-food').textContent = result.toFixed(2);
        } else {
            // Handle the case where the input is not a valid number
            alert('Please enter a valid number');
        }
    }
});