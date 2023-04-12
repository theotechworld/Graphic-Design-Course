// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Display payment details when Pay Now button is clicked
const payButton = document.getElementById('pay');
payButton.addEventListener('click', function() {
    const paymentDetails = document.getElementById('payment-details');
    paymentDetails.innerHTML = 'Please make payment of &#8358;5000 using Paystack with API key XYZ.';
});

// Lock course files until payment is made
const courseSection = document.getElementById('course');
const courseButton = courseSection.querySelector('button');
courseButton.addEventListener('click', function() {
    // Check if payment has been made
    const paymentDetails = document.getElementById('payment-details');
    if (paymentDetails.innerHTML.includes('Please make payment')) {
        alert('Please make payment first!');
        return;
    }
    // Unlock course files
    const courseFiles = document.createElement('div');
    courseFiles.innerHTML = '<h2>Course Files</h2><p>Here are your course files:</p><ul><li><a href="#">Video</a></li><li><a href="#">Picture</a></li><li><a href="#">PDF</a></li></ul>';
    courseSection.appendChild(courseFiles);
});

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
