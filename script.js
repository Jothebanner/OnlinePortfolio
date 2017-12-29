function showPopup(planetArea, planet) {
	document.getElementById(planetArea.id).style.animationPlayState = "paused";
	var planet = document.getElementById(planet.id);
	var popup = planet.getElementsByClassName("Popup")[0];
	popup.style.visibility = "visible";
	setPopupPos(planetArea, planet);
}
function hidePopup(planetArea, planet) {
	document.getElementById(planetArea.id).style.animationPlayState = "running";
	var popup = document.getElementById(planet.id).getElementsByClassName("Popup")[0];
	popup.style.visibility = "hidden";
}
function setPopupPos(planetArea, planet) {
	var planet = document.getElementById(planet.id);
	var popup = planet.getElementsByClassName("Popup")[0];
	if (popup.clientWidth <= planet.clientWidth) {
		var width = planet.clientWidth - 3;
		popup.style.width = width + "px";
	}
	else
	{
		popup.style.width = "max-content";
		popup.style.left = "-" + ((popup.clientWidth - planet.clientWidth) / 2) + "px";
	}
}
function growPlanet(planet) {
	var planet = document.getElementById(planet.id);
	planet.style.transform = "scale(1.2)";
	planet.style.transitionDuration = "100ms";
}
function shrinkPlanet(planet) {
	var planet = document.getElementById(planet.id);
	planet.style.transform = "scale(1)";
	planet.style.transitionDuration = "100ms";
}
function changeDiv(div1, div2) {
	document.getElementById(div1.id).style.display = "none";
	document.getElementById(div2.id).style.display = "block";
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
	  panel.style.padding = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
	  panel.style.padding = "18px 12%";
    } 
  });
}
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); // Change image every 5 seconds
}