jQuery(document).ready(function($) {
	
var formValues = JSON.parse(sessionStorage.getItem('formValues')) || {};
var $checkboxes = $("body :checkbox");
/*
var x = document.getElementById('option2').parentElement.id;
var m = document.getElementById(x).getElementsByTagName('img')[0];
var q = document.getElementById('couponTwoImage');

var newImage = new Image();
newImage = q.src;

*/

/*
$.each($checkboxes, function(checkKey, checkValue) {	
	
		console.log(checkValue);
								
	});
*/

//stores which formValues keys are true
var picsArray = [];

$checkboxes.on("change", function(){
  updateStorage();
   
});

//push all the keys that are true into the checkTrueArray
/*
$.each(formValues, function(key, value) {
	if (value == true) {
		
	$.each($checkboxes, function(checkKey, checkValue) {	
		if (checkValue.id == key) {
				
				var x = document.getElementById(checkValue.id).parentElement.id;
				var m = document.getElementById(x).getElementsByTagName('img')[0];
				
				var windowUrl = 'about:blank';
				var uniqueName = new Date();
				var windowName = 'Print' + uniqueName.getTime();
				
				var printWindow = window.open(windowUrl, windowName, 'left=50000,top=50000,width=0,height=0');
				printWindow.document.write(m);
				
				printWindow.document.close();
				printWindow.focus();
				printWindow.print();
				printWindow.close();
					
				
			}
								
	});
	
		
	}
	
});

*/



/*
$.each(checkTrueArray, function( index, value ) {
  console.log( index + ": " + value );
});
*/

function updateStorage(){
  $checkboxes.each(function(){
   
    formValues[this.id] = this.checked;
  });

  sessionStorage.setItem("formValues", JSON.stringify(formValues));
  //var test2 = localStorage.getItem("formValues");
	
   //alert(JSON.stringify(formValues, null, 4));
}



// On page load
$.each(formValues, function(key, value) {
  $("#" + key).prop('checked', value);
});



	/*
	/*
function putInArrayHome() {	
		//gets all input tags
		var HomeInputs = document.getElementsByTagName('input');
		
		for (var i =0; i< HomeInputs.length; i++) {
			
			if (HomeInputs[i].checked == true) {
				
				//gets access to image from image in text_after_content function in functions.php
				var pictureIndividual =  HomeInputs[i].getAttribute("data-variable-one");
				//pushes each individual picture into picture array
				pictures.push(pictureIndividual);
				
			}
			
		}
		
		var windowUrl = 'about:blank';
		var uniqueName = new Date();
		var windowName = 'Print' + uniqueName.getTime();
		
		var printWindow = window.open(windowUrl, windowName, 'left=50000,top=50000,width=0,height=0');
		printWindow.document.write(pictures);
		
		printWindow.document.close();
		printWindow.focus();
		printWindow.print();
		printWindow.close();
		
		}

*/



});









	

