


let age =  $('#age').val();
let weight = $('#weight').val();
let height = $('#height').val();




let calc = "bmi";
let requestUrl= `https://fitness-calculator.p.rapidapi.com/${calc}?age=${age}&weight=${weight}&height=${height}&waist`;

//For BMI
let bmi;
let health = '';

//get elements




const settings = {
	"async": true,
	"crossDomain": true,
	"url": requestUrl,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "b3fac6f21cmsh1046448cb17e58ap14a9f2jsn993b6500d6de",
		"X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com"
	}
};


$('#submit').on("click", calculateBmi);

function calculateBmi() {
$.ajax(settings).done(function (response) {
console.log('test');
	$('.result .bmi span').text(response.data.bmi);
	$('.result .health span').text(response.data.health);
});
}