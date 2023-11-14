document.addEventListener('DOMContentLoaded', function() {
    const donate = document.querySelector('.donate');
    donate.addEventListener('click', calculate);
    function calculate() {
        const inputValue = document.getElementById('example').value;
        const number = parseFloat(inputValue);
        if (!isNaN(number)) {
            const result = number / 36000;
            document.getElementById('number-of-pet-food').textContent = result.toFixed(2);
        } else {
            alert('Please enter a valid number');
        }
    }
});