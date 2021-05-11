//page load
$(document).ready(function()
{	
	if ($("#alertSuccess").text().trim() == "")
	{
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});

//Save button
$(document).on("click", "#btnSave", function(event)
{

	//clear status msges--------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	//Form validation-------------------
	var status = validateItemForm();

	//If not valid
	if (status != true)
	{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	// IF valid
	$("#formItem").submit();

});

$(document).on("click", "#btnUpdate", function(event)
{
	$("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());
	$("#itemCode").val($(this).closest("tr").find('td:eq(0)').text());
	$("#itemName").val($(this).closest("tr").find('td:eq(1)').text());
	$("#itemPrice").val($(this).closest("tr").find('td:eq(2)').text());
	$("#itemDesc").val($(this).closest("tr").find('td:eq(3)').text());
});

function validateItemForm()
{
	//validations
	
	// NAME
	if ($("#txtName").val().trim() == "")
	{
		return "Insert Student Name.";
	}
	
	//GENDER
	if ($('input[name="rdoGender"]:checked').length == 0)
	{
		return "Select Gender.";
	}
	
	//YEAR
	if ($("#ddlYear").val() == "0")
	{
		return "Select Year.";
	}
	
	return true;
}

function getStudentCard(name, gender, year)
{
	var title = (gender == "Male") ? "Mr." : "Ms.";
	
	var yearNumber = "";
	
	switch (year)
	{
		case "1":
		yearNumber = "1st";
		break;
		
		case "2":
		yearNumber = "2nd";
		break;
		
		case "3":
		yearNumber = "3rd";
		break;
		
		case "4":
		yearNumber = "4th";
		break;
	}
	
	var student = "";
	//Generate card
	
	student += "<div class=\"student card bg-light m-2\" style=\"max-width: 10rem; float: left;\">";
	
	student += "<div class=\"card-body\">";
	student += title + " " + name + " , ";
	student += "<br>";
	student += yearNumber + " Year";
	student += "</div>";
	student += "<input type=\"button\" value=\"Remove\" class=\"btn btn-danger remove\">";
	student += "</div>";
	
	return student;
}