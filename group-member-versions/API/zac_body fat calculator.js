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