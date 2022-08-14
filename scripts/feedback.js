$(window).on('load', () => {
    $('.hides-modal').on('click', hideModal);
    $('#submit-feedback').on('click', submit);
    document.addEventListener('input', onInput);
    document.getElementById('btn-feedback').addEventListener('click', showModal);
});

/**
 * Displays the Bulma Modal
 */
function showModal() {
    $('.modal').addClass('is-active')
}

/**
 * Displays the Bulma Modal
 */
function hideModal() {
    $('.modal').removeClass('is-active')
}

/**
 * onInput Handler: Changes the border color if valid or not
 * @param {Event} e 
 */
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
 * Check for validation and submit
 */
function submit() {
    const $email = document.querySelector('#form-feedback input.email');
    const $msg = document.querySelector('#form-feedback textarea.msg');
    if (!validate($email)) {
        $email.focus();
        $('.help.email').removeClass('is-hidden');
    } else if (!validate($msg)) {
        $msg.focus();
        $('.help.msg').removeClass('is-hidden');
    } else {
        // Send email
        const $name = document.querySelector('#form-feedback input.name');
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
            $('.help.email').addClass('is-hidden')
            let pattern = /[\w\.\-]+@[\w]+\.[\w]{2,4}/i;
            if ((target.required && !value) ||
                (value.length > 0 && !pattern.test(value))) {
                return false;
            }
            break;
        case 'number':
            // value = parseFloat(value);
            break;
        case 'text':
            $('.help.msg').addClass('is-hidden')
            if (value.length < minlength || value < min || value > max || (target.required && !value))
                return false;
            break;
    }
    return true;
}