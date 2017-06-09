if (localStorage.getItem("email") != undefined) {
	elemsToShow.push(localStorage.getItem("email"));
}

if (localStorage.getItem("education") != undefined) {
	elemsToShow.push(localStorage.getItem("education"));
}

if (localStorage.getItem("projects") != undefined) {
	elemsToShow.push(localStorage.getItem("projects"));
}


$("#save").click(function () {
	if (typeof(Storage) !== "undefined") {
	    // Code for localStorage/sessionStorage.
	    var elems = $('form').serializeArray();
	    localStorage.removeItem("email");
	    localStorage.removeItem("education");
	    localStorage.removeItem("projects");

	    for (var i = 0; i < elems.length; i++) {
	    	localStorage.setItem(elems[i].name, elems[i].name); 
	    }

	    var linkToRedirect = window.location.href.substring(0, window.location.href.lastIndexOf('/'));	    
	    window.location.href = linkToRedirect + "/index.html";
	} else {
	    // Sorry! No Web Storage support..
	}



});