// change navbar active-item
$('#Navbar .nav-link').click(function () {
	$(this).parent().find('.active-item').removeClass('active-item')
	$(this).addClass('active-item')
})

// trnasparent navbar
$('.navbar .navbar-toggler').click(function () {
	if ($('.navbar .navbar-toggler').hasClass('collapsed')) {
		$('.navbar').removeClass('transparent')
	}
	if (!$('.navbar .navbar-toggler').hasClass('collapsed') && $(window).scrollTop() < 50) {
		$('.navbar').addClass('transparent')
	}
})
$(document).scroll(function () {
	makeTransparent()
})
$('#Navbar .nav-link').click(function () {
	makeTransparent()
})
function makeTransparent() {
	if ($(window).scrollTop() < 50 && $('.navbar .navbar-toggler').hasClass('collapsed')) {
		$('.navbar').addClass('transparent')
	} else {
		$('.navbar').removeClass('transparent')
	}
}

// flip accordion arrows
$('#accordion .card-header').click(function () {
	$(this).parent().parent().find('.card .card-header img.reverse').removeClass('reverse')
	if (!$(this).parent().find('.collapse').hasClass('show')) {
		$(this).find('img').addClass('reverse')
	}
})
