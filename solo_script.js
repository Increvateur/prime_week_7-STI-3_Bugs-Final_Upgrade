// ! ! !
// Three Bugs

$(document).ready(function(){

	// var arrayAtticus = ["Atticus", "2405", "47000", 3];
	// var arrayJem = ["Jem", "62347", "63500", 4];
	// var arrayBoo = ["Boo", "11435", "54000", 3];
	// var arrayScout = ["Scout", "6243", "74750", 5];

	var atticus = new Person("Atticus", "2405", "47000", 3);
	var jem = new Person("Jem", "62347", "63500", 4);
	var boo = new Person("Boo", "11435", "54000", 3);
	var scout = new Person("Scout", "6243", "74750", 5);

	var array = [];
	array.push(atticus, jem, boo, scout);

	//Create variables used to write to the DOM
	// var newEl, newText, position;
	//Capture the position of insertion into the DOM
	// position = document.getElementById('content');

	//Loop the array, extracting each array and writing information to the DOM
	//Note that the information is not 'clean'
	for(var i = 0; i < array.length; i++){
		array[i] = CalculateSTI(array[i]);

	  // newEl = document.createElement('li');
		// newText = document.createTextNode(array[i]);
		// newEl.appendChild(newText);
		// position.appendChild(newEl);
	}

	function CalculateSTI(array){

	  var employee = {};

	  // employee = array.name;

	  var employeeNumber = array.employeeNumber;
	  var baseSalary = array.baseSalary;
	  var reviewScore = array.reviewScore;

	  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
	  	if(bonus > 0.13){
	    	bonus = 0.13;
	  	}
		employee.name = array.name;
	  employee.bonus = bonus;
	  employee.totalSalary = Math.round(baseSalary * (1.0 + bonus)).toFixed(2);
	  employee.bonusAmount = (baseSalary * bonus).toFixed(2);
		console.log(employee.name + " " + employee.bonus + " " + employee.totalSalary + " " + employee.bonusAmount);

		showResults(employee);

		return employee;
	}

	function getBaseSTI(reviewScore){
	  var basePercent;
	  switch(reviewScore){
	    case 1:
	      basePercent = 0;
	      break;
	    case 2:
	      basePercent = 0;
	      break;
	    case 3:
	      basePercent = 0.04;
	      break;
	    case 4:
	      basePercent = 0.06;
	      break;
	    case 5:
	      basePercent = 0.10;
	      break;
	  }
	  return basePercent;
	}

	function getYearAdjustment(employeeNumber){
	  var yearAdjustment = 0;
	  if(employeeNumber.length == 4){
	    yearAdjustment = 0.05;
	  }
	  return yearAdjustment;
	}

	function getIncomeAdjustment(salary){
	  var incomeAdjustment = 0;
	  salary = parseInt(salary);
	  if(salary > 65000){
	    incomeAdjustment = 0.01;
	  }
	  return incomeAdjustment;
	}

	function Person(name, employeeNumber, baseSalary, reviewScore){
	  this.name = name;
	  this.employeeNumber = employeeNumber;
	  this.baseSalary = baseSalary;
	  this.reviewScore = reviewScore;
	}

	function showResults(employee){

		$(".container").append('<div class="people"></div>');
		var $el = $(".container").children().last();

		$el.append("<p>Employee Name: " + employee.name + "</p>");
		$el.append("<p>Bonus Percent: " + employee.bonus + "%</p>");
		$el.append("<p>Bonus Amount: $" + employee.bonusAmount + "</p>");
		$el.append("<p>New Yearly Salary: $" + employee.totalSalary + "</p>");
	}
});
