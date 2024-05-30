//Home Page //

// toggle menu button
function toggleMenu(){
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}


//Home Page //

// Select the stats section and counter elements
const stats = document.querySelector('.stats');
const counters = document.querySelectorAll('.counter');

// Initialize a flag to track if the counters have been started
let bol = false;

// Calculate the offset of the stats section from the top of the page
const sectionOffset = stats.offsetTop + stats.offsetHeight;

// Add a scroll event listener to start the counters when scrolled to the stats section
window.addEventListener("scroll", () => {
    // Calculate the current offset of the page from the top
    const pageOffset = window.innerHeight + pageYOffset;

    // Check if the page has been scrolled past the stats section and if the counters have not yet been started
    if (pageOffset > sectionOffset && !bol) {
        // Loop through each counter element
        counters.forEach((counter) => {
            // Define a function to update the counter
            function updateCount() {
                // Get the target value, speed, and current count from data attributes
                const target = +counter.getAttribute('data-target');
                const speed = +counter.getAttribute('data-speed');
                const count = +counter.innerText;

                // If the current count is less than the target, increment the count and schedule the next update
                if (count < target) {
                    counter.innerText = count + 1;
                    setTimeout(updateCount, speed);
                } else {
                    // If the target is reached, set the counter to the target value
                    counter.innerText = target;
                }
            }

            // Start the counter update process
            updateCount();

            // Set the flag to true to indicate that counters have been started
            bol = true;
        });
    }
});



