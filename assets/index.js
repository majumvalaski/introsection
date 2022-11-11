/* When the user clicks on the button,
toggle between hiding and showing the features content */
function myFunction1() {
  document.getElementById("myDropdownF").classList.toggle("showF");
}
// Close the dropdown menu if the user clicks outside of it
// Features button
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var features = document.getElementsByClassName("features-content");
    var i;
    for (i = 0; i < features.length; i++) {
      var openFeatures = features[i];
      if (openFeatures.classList.contains('showF')) {
        openFeatures.classList.remove('showF');
      }
    }
  }
}
// Company button
function myFunction2() {
  document.getElementById("myDropdownC").classList.toggle("showC");
}
  
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var company = document.getElementsByClassName("company-content");
    var i;
    for (i = 0; i < company.length; i++) {
      var openCompany = company[i];
      if (openCompany.classList.contains('showC')) {
        openCompany.classList.remove('showC');
      }
    }
  }
}

  