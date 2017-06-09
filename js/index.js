console.log(localStorage);

var elemsToShow = [];
if (localStorage.getItem("email") != undefined) {
	elemsToShow.push(localStorage.getItem("email"));
	$('input[name=email]').prop("checked", true);
}

if (localStorage.getItem("education") != undefined) {
	elemsToShow.push(localStorage.getItem("education"));
	$('input[name=education]').prop("checked", true);
}

if (localStorage.getItem("projects") != undefined) {
	elemsToShow.push(localStorage.getItem("projects"));
	$('input[name=projects]').prop("checked", true);
}

showDivFromConfig('carlos_info', elemsToShow);
showDivFromConfig('joao_info', elemsToShow);
showDivFromConfig('nivedhita_info', elemsToShow);
showDivFromConfig('tiago_info', elemsToShow);

var myHilitor;

$('#searchinput').each(function() {
   var elem = $(this);

   // Save current value of element
   elem.data('oldVal', elem.val());

   // Look for changes in the value
	elem.bind("propertychange input", function(event) {
		event.preventDefault();
		// If value has changed...
		if (elem.data('oldVal') != elem.val()) {
			// Updated stored value
			elem.data('oldVal', elem.val());
			console.log(elem.val());

			if (elem.val().trim() == '') {
				hideElementsInfo('carlos_info');
				hideElementsInfo('joao_info');
				hideElementsInfo('nivedhita_info');
				hideElementsInfo('tiago_info');

				showDivFromConfig('carlos_info', elemsToShow);
				showDivFromConfig('joao_info', elemsToShow);
				showDivFromConfig('nivedhita_info', elemsToShow);
				showDivFromConfig('tiago_info', elemsToShow);
				return;
			}

			myHilitor.apply(this.value);

			searchElementsInfo('carlos_info', elem.val());
			searchElementsInfo('joao_info', elem.val());
			searchElementsInfo('nivedhita_info', elem.val());
			searchElementsInfo('tiago_info', elem.val());
    	}
  	});
});

document.addEventListener("DOMContentLoaded", function(e) {
    myHilitor = new Hilitor("playground");
    myHilitor.setMatchType("left");
}, false);


function hideElementsInfo(elem) {
	$('#' + elem).children('div').each(function(i, item) {
		$(item).hide();
	});
}

function showDivFromConfig(elem, elemsToShow) {
	$('#' + elem).children('div').each(function(i, item) {
		for (var k = 0; k < elemsToShow.length; k++) {
			if (elemsToShow[k] == item.id.split("_")[1]) {
				$(item).show();
			}
		}
	});
}

function searchElementsInfo(elem, keyword) {
	$('#' + elem).children('div').each(function(i, item) {
		if (item.lastElementChild.innerHTML.indexOf(keyword) != -1) {
			$(item).show();
//			$($(item)[0].children[1]).highlight(keyword);
		} else {
			$(item).hide();
		}
	});
}