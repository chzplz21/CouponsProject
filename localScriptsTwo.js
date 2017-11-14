jQuery(document).ready(function($) {
	
	//All objects
	var Objects = [
	
		{id: "one", src: "url('Images/coffee.JPG')", noURL: 'Images/coffee.JPG', type: "food", terminal: "a", foodOk: "yes", termOk: "yes"},
		{id: "two", src: "url('Images/Toyota.jpg')", noURL: 'Images/Toyota.jpg', type: "cars", terminal: "b", foodOk: "yes", termOk: "yes"},
		{id: "three", src: "url('Images/tea.jpg')", noURL: 'Images/tea.jpg', type: "food", terminal: "c", foodOk: "yes", termOk: "yes"},
		{id: "four", src: "url('Images/hyundai-verna.jpg')", noURL: 'Images/hyundai-verna.jpg', type: "cars", terminal: "a", foodOk: "yes", termOk: "yes"},
		{id: "five", src: "url('Images/pizza.jpg')",  noURL: 'Images/pizza.jpg', type: "food", terminal: "b", foodOk: "yes", termOk: "yes"},
		{id: "six", src: "url('Images/volvo.png')",  noURL: 'Images/volvo.png', type: "cars", terminal: "c", foodOk: "yes", termOk: "yes"},
		{id: "seven", src: "url('Images/rice.jpg')",  noURL: 'Images/rice.jpg', type: "food", terminal: "a", foodOk: "yes", termOk: "yes"},
		{id: "eight", src: "url('Images/miniGreen.jpg')",  noURL: 'Images/miniGreen.jpg', type: "cars", terminal: "b", foodOk: "yes", termOk: "yes"}
				
	]
	
	


	
	
	//On page load, creates everything
	for (var i = 0; i<Objects.length; i++) {
			FormCreate(i);
		
		}
	
	//Listens to button clicks, does functions
	document.getElementById("All").addEventListener("click", ShowAll);
	document.getElementById("PrintSelected").addEventListener("click", PrintFunction);
	
	
	
	
	//Initially creates everything
	function FormCreate(i) {
		var f = document.getElementById("theForm");
		var box = document.createElement("div");
		box.className = "box";
		
		box.style.backgroundImage = Objects[i].src;
		
		var L = document.createElement("label");
		L.id = Objects[i].id;
		//console.log(L);
		var c = document.createElement("input");
		c.type = "checkbox";
		
		f.appendChild(L);
		L.appendChild(box);
		L.appendChild(c);
		$("body").append(f);
	}
	
	

	
	
	//Stuff that takes care of the check counter!
	var checkedTotal = 0;
	counterShower.innerHTML = checkedTotal;
	//counter for checks
	$("#theForm :checkbox").on( "click",  countChecked );
	
	function countChecked() {
		if (this.checked == true) {
			checkedTotal++
		}
		
		else {
			checkedTotal--;
		}
		counterShower.innerHTML = checkedTotal;
	}

	


	//When Show All button is clicked
	function ShowAll() {
		
		var termSubmit = document.getElementById("termSubmit");
		var inputs = termSubmit.getElementsByClassName('inputs');
		
		for (var x = 0; x < inputs.length; x++) {
			inputs[x].checked = false;
		}
		
		var cool = document.getElementById(Objects[0].id);
		cool.style.display = "inline-block";
		console.log(cool);
		
		for (var i = 0; i<Objects.length; i++) {
			var elementCheck = document.getElementById(Objects[i].id);
				
				if (elementCheck.style.display == "none") {
					elementCheck.style.display = "inline-block";
					
					
				}
				
			}
			
	}

	
	//FILTER FUNCTION!
	$("#termSubmit :checkbox").on( "click",  filterFunction);
	function filterFunction() {
		
		var checkedArray = [];
		var thisForm = document.getElementById("termSubmit");
		var inputs = thisForm.getElementsByClassName('inputs');
		for (var x = 0; x < inputs.length; x++) {
			if (inputs[x].checked == true) {
				checkedArray.push(inputs[x].id);
			}
		}
		
		var typeFlag = false;
		var terminalFlag = false;

		for (x = 0; x < checkedArray.length; x++) {
			
			if (checkedArray[x] == "food" || checkedArray[x] == "cars") {
				typeFlag = true;
			}
			
			if (checkedArray[x] == "a" || checkedArray[x] == "b" || checkedArray[x] == "c") {
				terminalFlag = true;
			}
				
		}
		
		if (typeFlag == false && terminalFlag == false) {
		
			ShowAll();
	
		}
		
		
		else if (typeFlag == true && terminalFlag == true) {
			BothFunction(checkedArray);
		}
		
		
		
		else if (typeFlag == false) {
			var property = "terminal";
			OnlyOne(checkedArray, property);
		}
		
		
		else if (terminalFlag == false) {
			var property = "type";
			OnlyOne(checkedArray, property);
		}
		
	}
	
	
	
	//Both Function, for if at least one of Type and one of Terminal are checked
	function BothFunction(checkedArray) {
		
		
	//goes through each object
		for (var i = 0; i<Objects.length; i++) {
			
			
			var typeFlag = false;
			var terminalFlag = false;
			var elementNow = document.getElementById(Objects[i].id);
			
			//nested loop, goes through each checkedArray element, if both type and terminal
			//are found in checkedArray, then set those flags, typeFlag and terminalFlag, as true
			for (var y = 0; y < checkedArray.length; y++) {
			
				if (Objects[i].type == checkedArray[y]) {
					typeFlag = true;
				}
				
				if (Objects[i].terminal == checkedArray[y]) {
					terminalFlag = true;
				}
			}
			//If they're both true, than display
			if (typeFlag == true && terminalFlag == true) {
				if (elementNow.style.display == "none") {
							elementNow.style.display = "inline-block";
						}	
					}
			
				
			else  {
				FormDisappear(i);
				}
			
		}
	
	}
	
	
	
	
	//If no type is selected, only terminal is selected
	function OnlyOne(checkedArray, property) {
	
		
		for (var i = 0; i<Objects.length; i++) {
			var elementNow = document.getElementById(Objects[i].id);
			var Flag = false;
			for (var y = 0; y < checkedArray.length; y++) {
				
				if (Objects[i][property] == checkedArray[y]) {
					Flag = true
					
					
				}
				
			
			}
			
			if (Flag == true) {
				if (elementNow.style.display == "none") {
							elementNow.style.display = "inline-block";
						}	
					}
			
				
				else  {
					FormDisappear(i);
				}
			
				
		}
					
	}
	
	
	
	
	//If no terminal is selected, only type is selected
	function noterminalFunction(checkedArray) {

		
		for (var i = 0; i<Objects.length; i++) {
			var elementNow = document.getElementById(Objects[i].id);
			var Flag = false;
			for (var y = 0; y < checkedArray.length; y++) {
				
				if (Objects[i].type == checkedArray[y]) {
					console.log(Objects[i].type);
					Flag = true
						
				}
				
			
			}
			
			if (Flag == true) {
				if (elementNow.style.display == "none") {
							elementNow.style.display = "inline-block";
						}	
					}
			
				
			else  {
				FormDisappear(i);
				}
			
				
		}
					
	}

	
	
	
	
	
	
	
	
	
	
	
	
	/*
	$("#termSubmit").submit(function (e) {
		e.preventDefault();
		
		var checkedArray = [];
		//First puts all the the checked ones into one array
		var inputs = this.getElementsByClassName('inputs');
		for (var x = 0; x < inputs.length; x++) {
			if (inputs[x].checked == true) {
				checkedArray.push(inputs[x].id);
			}
		}
		
		//goes through each object
		for (var i = 0; i<Objects.length; i++) {
			
			
			var typeFlag = false;
			var terminalFlag = false;
			var elementNow = document.getElementById(Objects[i].id);
			
			//nested loop, goes through each checkedArray element, if both type and terminal
			//are found in checkedArray, then set those flags, typeFlag and terminalFlag, as true
			for (var y = 0; y < checkedArray.length; y++) {
			
				if (Objects[i].type == checkedArray[y]) {
					typeFlag = true;
				}
				
				if (Objects[i].terminal == checkedArray[y]) {
					terminalFlag = true;
				}
			}
			//If they're both true, than display
			if (typeFlag == true && terminalFlag == true) {
				if (elementNow.style.display == "none") {
							elementNow.style.display = "inline-block";
						}	
					}
			
				
			else  {
				FormDisappear(i);
				}
			
		}
		
		
	});
	
	*/
	

	//Makes element disappear
	function FormDisappear(i) {
		
		var child = document.getElementById(Objects[i].id);
		//console.log(child);
		
		child.style.display = "none";
		
			
	}
	
	//prints
	function PrintFunction () {
		//creates empty array of pictures
		var pictures = [];
		//goes through each object
		for (var i = 0; i<Objects.length; i++) {
			//gets id of Label element for each input
			var ElementNow = document.getElementById(Objects[i].id);
			//gets input value, whether it is checked or not
			var input =  ElementNow.getElementsByTagName('input')[0];
			
			
			if (input.checked == true) {
				//gets just the raw image url of that input. Can be found as a value in the Object
				var picURL = Objects[i].noURL;
				//creates a new image.. the raw url will be added to it
				var Image = document.createElement("IMG");
				//This is where the raw url is added
				Image.setAttribute("src", picURL);
				//Must do this function to convert Image object to string
				Image = outerHTML(Image);
			
				function outerHTML(node){
					return node.outerHTML || new XMLSerializer().serializeToString(node);
				}
				//push the Image string to the pictures array
				pictures.push(Image);
				
			}
			
			
		}
		
				var windowUrl = 'about:blank';
				var uniqueName = new Date();
				var windowName = 'Print' + uniqueName.getTime();
				var printWindow = window.open(windowUrl, windowName, 'left=50000,top=50000');
				//goes through pictures array
				for (var m = 0; m<pictures.length; m++) {
					printWindow.document.write(pictures[m]);
					printWindow.document.write("<br>");
					printWindow.document.write("<br>");
					printWindow.document.write("<br>");
				}
				
				//Weird thing, but is necessary to correctly print the pictures
				printWindow.document.write('<scr' + 'ipt type="text/javascript">' + 'window.onload = function() { window.print(); window.close(); };' + '</sc' + 'ript>');
				
				
				printWindow.document.close();
				printWindow.focus();
					
		
	}
	

	
	
		/*
	//When food button is clicked
	function FoodFunction() {
	
		for (var i = 0; i<Objects.length; i++) {
			var elementNow = document.getElementById(Objects[i].id);
			if (Objects[i].type == "food") {
				if (elementNow.style.display == "none") {
					elementNow.style.display = "inline-block";
				}
				
			}
			
			else if (Objects[i].type != "food") {
				FormDisappear(i);
			}
			
		}
		
	}
	
	
	//When cars is clicked
	function CarsFunction() {
		
		for (var i = 0; i<Objects.length; i++) {
			var elementNow = document.getElementById(Objects[i].id);
			if (Objects[i].type == "cars") {
				if (elementNow.style.display == "none") {
					elementNow.style.display = "inline-block";
				}
				
			}
			
			else if (Objects[i].type != "cars") {
				FormDisappear(i);
			}
			
		}
		
	}

	
   //When a type is clicked
   
	function FilterFunctionType() {
		alert(this.id);
		for (var i = 0; i<Objects.length; i++) {
			var elementNow = document.getElementById(Objects[i].id);
			if (Objects[i].type == this.id) {
				if (elementNow.style.display == "none") {
					elementNow.style.display = "inline-block";
				}
				
			}
			
			else if (Objects[i].type != this.id) {
				FormDisappear(i);
			}
			
		}
		
	}
	
	
	*/
	
	
	
});