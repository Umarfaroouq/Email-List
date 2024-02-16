// Google Apps Script URL for submitting form data
const scriptURL = 'https://script.google.com/macros/s/AKfycbwccI1O00hr7goL8jfJod5YH89vR8yeqxSbwdOyp6ndA0ZK_9pwCfK91A2V85iokj5C/exec';

// Get the form and message elements
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

// Event listener for form submission
form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent default form submission behavior

    // Send form data to Google Sheets using fetch API
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            // Handle successful response
            msg.innerHTML = "Thank you for subscribing!"; // Display success message
            setTimeout(function(){
                msg.innerHTML = ""; // Clear success message after 5 seconds
            }, 5000);
            form.reset(); // Reset the form fields after successful submission
        })
        .catch(error => console.error('Error!', error.message)); // Log any errors that occur during submission
});
