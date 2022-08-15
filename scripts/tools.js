let $age = $("#age");
let $weight = $("#weight");
let $height = $("#height");

let baseUrl = `https://fitness-calculator.p.rapidapi.com/`;

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


  //document.getElementById('submit').addEventListener('click', showBmi);
$("#submit").on("click", showBmi);

function showBmi(e) {

	//e.preventDefault();

	let requestUrl = baseUrl + getBmiParams();
	settings.url = requestUrl;

	$.ajax(settings).done(function (response) {
		$(".result .bmi span").text(response.data.bmi);
		$(".result .health span").text(response.data.health);
	  });

}

function getBmiParams() {
  let age = $age.val();
  let weight = $weight.val();
  let height = $height.val();

  let calc = "bmi";
  let params = `${calc}?age=${age}&weight=${weight}&height=${height}&waist`;

  return params;
}


/*BODY FAT CALCULATOR API*/


const bodyFatForm = document.getElementById('bodyFatForm');

// bodyFatForm.addEventListener("click",showFat);
bodyFatForm.addEventListener('submit',function(e) {
	e.preventDefault()
	showFat()

})

function createLink(){

let ageFat= document.getElementById('ageFat').value;
let sexFat= document.getElementById('sexFat').value;
let heightFat = document.getElementById('heightFat').value;
let weightFat = document.getElementById('weightFat').value;
let neck = document.getElementById('neck').value;
let waist = document.getElementById('waist').value;
let hip = document.getElementById('hip').value;




const settings2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://fitness-calculator.p.rapidapi.com/bodyfat?age=" + ageFat + "&gender=" + sexFat + "&weight=" + weightFat + "&height=" + heightFat + "&neck=" + neck + "&waist=" + waist + "&hip=" + hip + "",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "31562100e8msh1003758015a093ep1b9c92jsncd5a5b7db170",
		"X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com"
	}
};

return settings2
}


function showFat(){




	$.ajax(createLink()).done(function (response) {


	console.log(response.data["Body Fat Category"]);
	console.log(response.data);

	$(".fatResult .bodyFat span").text(response.data["Body Fat Mass"] + "%");
	$(".fatResult .fatCategory span").text(response.data["Body Fat Category"]);

});
}
// showFat();





