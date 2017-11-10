jQuery(document).ready(function($) {
	
	//All objects
	var Objects = [
	
		{id: "one", src: "url('Images/coffee.JPG')", noURL: 'Images/coffee.JPG', type: "food"},
		{id: "two", src: "url('Images/Toyota.jpg')", noURL: 'Images/Toyota.jpg', type: "cars"},
		{id: "three", src: "url('Images/tea.jpg')", noURL: 'Images/tea.jpg', type: "food"},
		{id: "four", src: "url('Images/hyundai-verna.jpg')", noURL: 'Images/hyundai-verna.jpg', type: "cars"},
		{id: "five", src: "url('Images/pizza.jpg')",  noURL: 'Images/pizza.jpg', type: "food"},
		{id: "six", src: "url('Images/volvo.png')",  noURL: 'Images/volvo.png', type: "cars"},
		{id: "seven", src: "url('Images/rice.jpg')",  noURL: 'Images/rice.jpg', type: "food"},
		{id: "eight", src: "url('Images/miniGreen.jpg')",  noURL: 'Images/miniGreen.jpg', type: "cars"}
				
	]
	
	
	//On page load, creates everything
	for (var i = 0; i<Objects.length; i++) {
		
			FormCreate(i);
		
		}
	
	//Listens to button clicks, does functions
	document.getElementById("All").addEventListener("click", ShowAll);
	document.getElementById("foodButton").addEventListener("click", FoodFunction);
	document.getElementById("carsButton").addEventListener("click", CarsFunction);
	document.getElementById("PrintSelected").addEventListener("click", PrintFunction);
	
	//When Show All button is clicked
	function ShowAll() {
		for (var i = 0; i<Objects.length; i++) {
			var elementCheck = document.getElementById(Objects[i].id);
				if (elementCheck.style.display = "none") {
					elementCheck.style.display = "inline-block";
					
				}
			
			}
	}
	
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
	
	//Makes element disappear
	function FormDisappear(i) {
		
		var child = document.getElementById(Objects[i].id);
		console.log(child);
		
		child.style.display = "none";
		
			
	}
	
	function PrintFunction () {
		var pictures = [];
		for (var i = 0; i<Objects.length; i++) {
			var ElementNow = document.getElementById(Objects[i].id);
			var input =  ElementNow.getElementsByTagName('input')[0];
			var picContainer = ElementNow.getElementsByClassName('box')[0];
			
			var picURL = Objects[i].noURL;
			var Image = document.createElement("IMG");
			var Div = document.createElement("div");
			Image.setAttribute("src", picURL);
			ImageAgain = document.getElementById("coupon");
		
			Image = outerHTML(Image);
			
			function outerHTML(node){
				return node.outerHTML || new XMLSerializer().serializeToString(node);
			}
			
			if (input.checked == true) {
				pictures.push(Image);
			
				
				
				

				
			}
			
			
		}
		
		
		
			var windowUrl = 'about:blank';
				var uniqueName = new Date();
				var windowName = 'Print' + uniqueName.getTime();
				var printWindow = window.open(windowUrl, windowName, 'left=50000,top=50000');
				
				for (var m = 0; m<pictures.length; m++) {
					printWindow.document.write(pictures[m]);
					printWindow.document.write("<br>");
					printWindow.document.write("<br>");
					printWindow.document.write("<br>");
				}
				
				
				printWindow.document.write('<scr' + 'ipt type="text/javascript">' + 'window.onload = function() { window.print(); window.close(); };' + '</sc' + 'ript>');
				
				
				
				
				printWindow.document.close();
				printWindow.focus();
				
				
				
				
		
		
	}
	

	
	
	
});