function showPopup(planetName, planet) {
	document.getElementById(planetName.id).style.animationPlayState = "paused";
	var planet = document.getElementById(planet.id);
	var popup = planet.getElementsByClassName("Popup")[0];
	popup.style.visibility = "visible";
	setPopupPos(planetName, planet);
}
function hidePopup(planetName, planet) {
	document.getElementById(planetName.id).style.animationPlayState = "running";
	var popup = document.getElementById(planet.id).getElementsByClassName("Popup")[0];
	popup.style.visibility = "hidden";
}
function setPopupPos(planetName, planet) {
	var planet = document.getElementById(planet.id);
	var popup = planet.getElementsByClassName("Popup")[0];
	if (popup.clientWidth < planet.clientWidth) {
		popup.style.width = planet.clientWidth + "px";
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

