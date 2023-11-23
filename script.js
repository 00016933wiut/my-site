document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const slidesContainer = document.querySelector('.carousel-slides');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    const itemsVisible = 3;

    function showSlide(index) {
        slidesContainer.style.transform = `translateX(${(100 / itemsVisible) * -index}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

});
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

function submitForm() {
    var f_name = document.getElementById('firstName');
    var l_name = document.getElementById('lastName');
    var user_email = document.getElementById('email');
    var message = document.getElementById('message');
    if (f_name.value === '' || l_name.value === '' || user_email.value === '' || message.value === '') {
        alert("fill all fields!");
    } else {
        alert('Form submitted!');
        f_name.value = '';
        l_name.value = '';
        user_email.value = '';
        message.value = '';
    }
}