// Declare settings for the request
const SETTINGS = {
    async: true,
    crossDomain: true,
    baseUrl: 'https://fitness-calculator.p.rapidapi.com/',
    url: null,
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "b3fac6f21cmsh1046448cb17e58ap14a9f2jsn993b6500d6de",
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
};

// if an input changes, calls the changeAllInputs function to match the value of similar fields
document.addEventListener('input', (event) => {
    // Get the element that triggered the EventListener
    let target = event.target;
    // Find all the inputs with the same name and assign them the same value
    if (target.matches('.input.' + target.name)) {
        changeAllInputs(target);
        validate(target);
    }
    // Hide result boxes - Decided to remove this
    // $('.result').addClass('is-hidden');
});

// Add an eventListener to the Submit buttons
document.getElementById('submit-bmi').addEventListener('click', calculateBMI);
document.getElementById('submit-idealweight').addEventListener('click', calculateIdealWeight);
document.getElementById('submit-dailycaloriereq').addEventListener('click', calculateCalorieReq);

/**
 * Validates the BMI inputs. Consumes API. Displays result
 * @param {Event} event 
 */
function calculateBMI(event) {
    // declare variables used by the API
    let age, weight, height;
    // Validate and assign values
    try {
        document.querySelectorAll('#form-bmi input').forEach(input => {
            if (!validate(input))
                throw `${input.name} field's value is not valid!`;
            else if (input.name === 'age')
                age = input.value;
            else if (input.name === 'weight')
                weight = input.value;
            else if (input.name === 'height')
                height = input.value;
            else
                throw 'Something went wrong';
        });
    } catch (e) {
        console.log(e);
        return;
    }
    // Build URL
    let params = getParams(['age', 'weight', 'height'], [age, weight, height]);
    SETTINGS.url = SETTINGS.baseUrl + 'bmi?' + params;
    // Consume the API
    $.ajax(SETTINGS)
        // Success
        .done(function (response) {
            $("#form-bmi .bmi span").text(response.data.bmi);
            $("#form-bmi .health span").text(response.data.health);
            $('#form-bmi .result')
                .removeClass('is-hidden has-background-info has-background-success has-background-warning has-background-danger')
                .addClass(() => {
                    let bmi = response.data.bmi;
                    if (bmi < 18.5)
                        return 'has-background-info';
                    else if (bmi >= 18.5 && bmi <= 24.9)
                        return 'has-background-success';
                    else if (bmi >= 25 && bmi <= 29.9)
                        return 'has-background-warning';
                    else
                        return 'has-background-danger'
                });
        })
        // Fail
        .fail(function (response) {
            console.log('Something went wrong!\n' + response.statusText);
        });
}

/**
 * Validates the IdealWeight inputs. Consumes API. Displays result
 * @param {Event} event 
 */
function calculateIdealWeight(event) {
    // declare variables used by the API
    let gender, height;
    // Validate and assign values
    try {
        let genderInput = document.querySelector('#form-idealweight select.gender');
        gender = genderInput.value;
        let heightInput = document.querySelector('#form-idealweight input.height');
        if (!validate(heightInput))
            throw `${heightInput.name} field's value is not valid!`;
        else
            height = heightInput.value;
    } catch (e) {
        console.log(e);
        return;
    }
    // Build URL
    let params = getParams(['gender', 'height'], [gender, height]);
    SETTINGS.url = SETTINGS.baseUrl + 'idealweight?' + params;
    // Consume the API
    $.ajax(SETTINGS)
        // Success
        .done(function (response) {
            $("#form-idealweight .hamwi span").text(response.data.Hamwi);
            $("#form-idealweight .devine span").text(response.data.Devine);
            $("#form-idealweight .miller span").text(response.data.Miller);
            $("#form-idealweight .robinson span").text(response.data.Robinson);
            $('#form-idealweight .result').removeClass('is-hidden');
        })
        // Fail
        .fail(function (response) {
            console.log('Something went wrong!\n' + response.statusText);
        });
}

/**
 * Validates the CalorieRequirement inputs. Consumes API. Displays result
 * @param {Event} event 
 */

function calculateCalorieReq(event) {
    // declare variables used by the API
    let activityLevel, age, gender, height, weight;
    // Validate and assign values
    try {
        let activityLevelInput = document.querySelector('#form-dailyrequirements select.activityid');
        activityLevel = activityLevelInput.value;

        let genderInput = document.querySelector('#form-dailyrequirements select.gender');
        gender = genderInput.value;
        document.querySelectorAll('#form-dailyrequirements input').forEach(input => {
            if (!validate(input))
                throw `${input.name} field's value is not valid!`;
            else if (input.name === 'age')
                age = input.value;
            else if (input.name === 'weight')
                weight = input.value;
            else if (input.name === 'height')
                height = input.value;
            else
                throw 'Something went wrong';
        });
    } catch (e) {
        console.log(e);
        return;
    }
        
    // Build URL
    let params = getParams(['age', 'gender', 'height', 'weight', 'activitylevel'], [age, gender, height, weight, activityLevel]);
    SETTINGS.url = SETTINGS.baseUrl + 'dailycalorie?' + params;
    // Consume the API
    $.ajax(SETTINGS)
        // Success
        .done(function (response) {
            $("#form-dailyrequirements .bmr span").text(Math.round(response.data.BMR));
            $("#form-dailyrequirements .maintain-weight span").text(Math.round(response.data.goals['maintain weight']));
            $("#form-dailyrequirements .mild-weight-loss span").text(Math.round(response.data.goals['Mild weight loss']['calory']));
            $("#form-dailyrequirements .kg-mild-loss span").text(response.data.goals['Mild weight loss']['loss weight']);;
            $("#form-dailyrequirements .weight-loss span").text(Math.round(response.data.goals['Weight loss']['calory']));
            $("#form-dailyrequirements .extreme-weight-loss span").text(Math.round(response.data.goals['Extreme weight loss']['calory']));
            $("#form-dailyrequirements .mild-weight-gain span").text(Math.round(response.data.goals['Mild weight gain']['calory']));
            $("#form-dailyrequirements .weight-gain span").text(Math.round(response.data.goals['Weight gain']['calory']));
            $("#form-dailyrequirements .extreme-weight-gain span").text(Math.round(response.data.goals['Extreme weight gain']['calory']));
            $('#form-dailyrequirements .result').removeClass('is-hidden');
        })
        // Fail
        .fail(function (response) {
            console.log('Something went wrong!\n' + response.statusText);
        });

}

/**
 * Build params to be used in the url (ex. 'age=25&height=185')
 * @param {string[]} names 
 * @param {number[]} values 
 * @returns {string}
 */
function getParams(names, values) {
    let output = '';
    for (let i = 0; i < names.length; i++) {
        // Add 'name=value'
        output += names[i] + '=' + values[i];
        // Add '&' if not the last value
        if (i < names.length - 1)
            output += '&';
    }
    return output;
}
    

/**
 * Makes sure all the same inputs keep the same value
 * @param {String} className
 * @param {EventTarget} target 
 */
function changeAllInputs(target) {
    document.querySelectorAll('.input.' + target.name).forEach(queryElement => {
        if (queryElement != target)
            queryElement.value = target.value;
    });
}

/**
 * Validates the input field and then shows or hides the error message
 * @param {EventTarget} target 
 * @returns {Boolean}
 */
function validate(target) {
    // Get from the input: min, max, and required
    const min = parseInt(target.min);
    const max = parseInt(target.max);
    const value = parseInt(target.value);
    if (value < min || value > max || (target.required && !value)) {
        $(`p.${target.name}`).removeClass('is-hidden');
        $(`input.${target.name}`).addClass('is-danger').removeClass('is-success');
        target.focus();
        return false;
    } else {
        $(`p.${target.name}`).addClass('is-hidden');
        $(`input.${target.name}`).removeClass('is-danger').addClass('is-success');
        return true;
    }
}
