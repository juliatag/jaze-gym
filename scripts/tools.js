let $age = $("#age");
let $weight = $("#weight");
let $height = $("#height");

let baseUrl = `https://fitness-calculator.p.rapidapi.com/`;

$("#submit").on("click", showBmi);

//get elements

const settings = {
  async: true,
  crossDomain: true,
  url: baseUrl,
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b3fac6f21cmsh1046448cb17e58ap14a9f2jsn993b6500d6de",
    "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
  },
};

function getBmiParams() {
  let age = $age.val();
  let weight = $weight.val();
  let height = $height.val();

  let calc = "bmi";
  let params = `${calc}?age=${age}&weight=${weight}&height=${height}&waist`;

  return params;
}



function showBmi() {

	let requestUrl = baseUrl + getBmiParams();
	settings.url = requestUrl;

	$.ajax(settings).done(function (response) {
		$(".result .bmi span").text(response.data.bmi);
		$(".result .health span").text(response.data.health);
	  });

}

