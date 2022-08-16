
/*
    Purpose: Add a footer to all pages
    - includes some info, social links and feedbackforms
    - includes validation for the forms
*/

var _loaded = {};

//fetch the footer and appends it to the document
fetch("components/footer.html")
  .then((response) => response.text())
  .then((text) => (document.getElementById("footer").innerHTML = text))
  .then(loadEmailScript)
  .then(getFeedbackModal);

// Load the emailJs script on any page
function loadEmailScript() {
  let url = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
  if (!_loaded[url]) {
    var s = document.createElement('script');
    s.src = url;
    document.head.appendChild(s);
    _loaded[url] = true;
  }
}

function getFeedbackModal() {
  // Create variables for the feedback form buttons, the modal background, and the modal itself
  const feedbackBtn = document.querySelector("#feedbackBtn");
  const modal = document.querySelector("#modal");

  // Any Element with the hides-modal class will close the Modal
  document.querySelectorAll(".hides-modal").forEach(el => el.addEventListener("click", function () {
    modal.classList.remove("is-active")
  }));

  // Add an onClick listener to Gym feedback button
  feedbackBtn.addEventListener("click", (e) => {
    // Display the feedbackform Modal
    modal.classList.add("is-active");
  });

  document.querySelector('input.email').addEventListener('input', onInput);
  document.getElementById('frequency').addEventListener('input', onInput);

  document.getElementById('submitBtn').addEventListener('click', submit);
}

function submit(e) {
  const $email = document.querySelector('input.email');
  const $freq = document.getElementById('frequency');

  if (validate($email) && validate($freq)) {
    //if validation is passed

    //declare and init variables
    const $name = document.querySelector('input.name');
    const name = (($name.value) ? $name.value : 'Anonymous');
    const email = ($email.value) ? $email.value : '';
    const freq = $freq.value + ' times per ' + document.getElementById('per').value;
    const rating = document.getElementById('rating').value;
    const msg = document.getElementById('msg').value;
    const $thanksMessage = document.createElement('h3');
    $thanksMessage.classList.add('is-flex-grow-1', 'is-flex-shrink-1','has-text-centered','px-4','has-text-weight-bold');

    //initialise emailjs with form values
    emailjs.init('RjfHFBbtlV7Yc4Ys8');
    var templateParams = {
      name: name,
      email: email,
      freq: freq,
      rating: rating,
      msg: msg
    };
    
    //send email
    emailjs.send('service_8zps2hk', 'template_h17i7dh', templateParams)
      .then(function (response) {
        //Sucess
        $thanksMessage.innerText = 'Thank you or your Feedback!';
        //console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        //Failed
        $thanksMessage.innerText = 'Error! Email not sent.';
        $thanksMessage.classList.add('has-text-danger');
        //console.log('FAILED...', error);
      });

      //Add a submit message
      document.querySelector('#feedback-form footer').appendChild($thanksMessage);
  }
}

function onInput(e) {
  let target = e.target;
  if (validate(target)) {
    target.classList.add('is-success');
    target.classList.remove('is-danger');
  } else {
    target.classList.add('is-danger');
    target.classList.remove('is-success');
  }
}

/**
 * 
 * @param {Element} target 
 * @returns {Boolean}
 */
function validate(target) {
  const min = parseInt(target.min);
  const max = parseInt(target.max);
  const minlength = parseInt(target.getAttribute('minlength'));
  let value = target.value;
  switch (target.getAttribute('type')) {
    case 'email':
      // https://www.w3schools.com/jsref/jsref_obj_regexp.asp
      document.querySelector('.help.email').classList.add('is-hidden')
      let pattern = /[\w\.\-]+@[\w]+\.[\w]{2,4}/i;
      if ((target.required && !value) ||
        (value.length > 0 && !pattern.test(value))) {
        target.focus();
        document.querySelector('.help.email').classList.remove('is-hidden')
        return false;
      }
      break;
    case 'number':
      document.querySelector('.help.frequency').classList.add('is-hidden')
      if (target.required && !value) {
        target.focus();
        document.querySelector('.help.frequency').classList.remove('is-hidden')
        return false;
      }
      break;
  }
  return true;
}
