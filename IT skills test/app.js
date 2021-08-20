//submit button function
function submitButton() {
  //get value for each input fields
  var name = document.getElementById("name").value;
  var contactnumber = document.getElementById("contactnumber").value;

  //ids for text output
  var outputbox = document.getElementById("outputbox");
  var output = document.getElementById("Output");

  //get id for the icons
  var checkname = document.getElementById("checkname");
  var checkcontact = document.getElementById("checkcontact");

  console.log(name);
  console.log(contactnumber);

  if (
    (name == null || name == "") &&
    (isNaN(contactnumber) ||
      contactnumber == null ||
      contactnumber == "" ||
      contactnumber.length != 11)
  ) {
    checkname.className = "";
    checkcontact.className = "";
    checkname.classList.add("fa", "fa-times-circle");
    checkcontact.classList.add("fa", "fa-times-circle");
    checkname.style.color = "red";
    checkcontact.style.color = "red";

    output.innerHTML = "Error: Please check all the details before submitting.";
    outputbox.classList.add("outputerror", "font-italic");
  } else if (
    isNaN(contactnumber) ||
    contactnumber == null ||
    contactnumber == "" ||
    contactnumber.length != 11
  ) {
    checkname.className = "";
    checkcontact.className = "";
    checkname.classList.add("fa", "fa-check-circle");
    checkcontact.classList.add("fa", "fa-times-circle");
    checkname.style.color = "green";
    checkcontact.style.color = "red";

    output.innerHTML = "Error: Please check all the details before submitting.";
    outputbox.classList.add("outputerror", "font-italic");
  } else if (name == null || name == "") {
    checkname.className = "";
    checkcontact.className = "";
    checkname.classList.add("fa", "fa-times-circle");
    checkcontact.classList.add("fa", "fa-check-circle");
    checkname.style.color = "red";
    checkcontact.style.color = "green";

    output.innerHTML = "Error: Please check all the details before submitting.";
    outputbox.classList.add("outputerror", "font-italic");
  } else {
    checkname.className = "";
    checkcontact.className = "";
    checkname.classList.add("fa", "fa-check-circle");
    checkcontact.classList.add("fa", "fa-check-circle");
    checkname.style.color = "green";
    checkcontact.style.color = "green";

    output.innerHTML = "You have successfully submitted your contact details";
    outputbox.classList.add("outputcorrect", "font-italic");
  }
}

//theme switcher
function switchTheme(event) {

  //whole section
  var wholesection = document.getElementById("wholesection");

  //get value for each input fields
  var name = document.getElementById("name");
  var contactnumber = document.getElementById("contactnumber");

  //Light or Dark
  if (event.value === "Light") {
    wholesection.classList.remove("darktheme");
    wholesection.classList.add("lighttheme");
    name.style.color = "rgb(15, 15, 15)";
    contactnumber.style.color = "rgb(15, 15, 15)";
    name.style.backgroundColor = "white";
    contactnumber.style.backgroundColor = "white";
    name.style.borderBottom = "1px solid rgb(15, 15, 15)"
    contactnumber.style.borderBottom = "1px solid rgb(15, 15, 15)"
    document.body.style.backgroundColor = "white";

    console.log(event.value, "Theme");
  } else if (event.value === "Dark") {
    wholesection.classList.remove("lighttheme");
    wholesection.classList.add("darktheme");
    name.style.color = "white";
    contactnumber.style.color = "white";
    name.style.backgroundColor = "rgb(15, 15, 15)";
    contactnumber.style.backgroundColor = "rgb(15, 15, 15)";
    name.style.borderBottom = "1px solid white"
    contactnumber.style.borderBottom = "1px solid white"
    document.body.style.backgroundColor = "rgb(41, 41, 41)";

    console.log(event.value, "Theme");
  }
}

//onclick button
document.getElementById("html").onclick = function () {
  submitButton();
};

//onchange theme radio buttons
document.getElementById("light").onchange = function () {
  switchTheme(this);
};
document.getElementById("dark").onchange = function () {
  switchTheme(this);
};
