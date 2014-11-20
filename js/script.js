window.currentPage = 1;
window.scrollOffset = 0;
window.triggeredByFunction = false;

function changePage () {
	window.triggeredByFunction = true;
	$('html,body').animate({
		scrollTop: $(".page").eq(window.currentPage - 1).offset().top,
		complete: function () {
			window.triggeredByFunction = false;
		}
	});
	anim();

	setActiveButton();
}

function anim () {
	if ( window.currentPage == 1 ) {
		$("#up").animate({
			opacity: 0.5
		});
	} else {
		$("#up").animate({
			opacity: 1
		});
	}

	if ( window.currentPage == $(".page").length ) {
		$("#down").animate({
			opacity: 0.5
		});
	} else {
		$("#down").animate({
			opacity: 1
		});
	}
}

function setActiveButton () {
	$("#menu-floating core-menu").get(0).setAttribute("selected", window.currentPage - 1);
}

$("#menu-floating core-menu").on("core-activate", function (e1, e2, e3) {
	window.currentPage = $("#menu-floating core-menu").find(".core-selected").index() + 1;
	changePage();
});

$(document).ready( function () {
	window.currentPage = Math.ceil($(document).scrollTop() /  $(".page:first").height()) + 1;

	if ( window.currentPage < 0 || window.currentPage == 0 ) {
		window.currentPage = 1;
	}

	if ( window.currentPage > $(".page").length ) {
		window.currentPage = $(".page").length;
	}

	anim();
	setActiveButton();
} );

$(document).on('keydown', function ( event ) {
	if ( event.which == 38 && window.currentPage != 1 ) {
		window.currentPage = window.currentPage - 1;
		changePage();
	} else if ( event.which == 40 && window.currentPage != $(".page").length ) {
		window.currentPage = window.currentPage + 1;
		changePage();
	}
});

$(document).on("scroll", function (event) {
	if ( window.triggeredByFunction == false ) { 
		window.currentPage = Math.ceil($(document).scrollTop() /  $(".page:first").height());
	}

	if ( window.currentPage == 1 ) {
		$("#menu-floating paper-button").css("color", "black");
	} else {
		$("#menu-floating paper-button").css("color", "white");
	}
});

$("#down").on("click", function () {
	if ( window.currentPage != $(".page").length ) {
		window.currentPage = window.currentPage + 1;
		changePage();
	}
});

$("#up").on("click", function () {
	if ( window.currentPage != 1 ) {
		window.currentPage = window.currentPage -1;
		changePage();
	}
});