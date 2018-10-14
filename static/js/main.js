$(document).ready(function(){

	// COMPILE TEMPLATE
	var template = $("#template-info").html();
	var compiledTemplate = Handlebars.compile(template);


	// HEADER + json header
	var navigation = {
		'navLogo': 'Logo',
	  	'navItems' : [
	    {
	    'navTitle' : 'Home',
	    'navLink' : '#'
	    },
	    {
	    'navTitle' : 'Contact',
	    'navLink' : '#'
	    },
	    {
	    'navTitle' : 'Support',
	    'navLink' : '#'
	    }
	  ]
	}

	$(".header").html(compiledTemplate(navigation));


	// SLOGAN json info
	var sloganIntro = {
	    'slogan-phrase' : 'Slogan of the website',
	    'slogan-quote' : '“People don’t take trips, trips take people.“ But you can also take people to trips!'
	    }

	$(".slogan").html(compiledTemplate(sloganIntro));


	// QUOTES
	var quotesDouble = {
	    'quoteOne' : 'This quote by a famous writer John Steinbeck is absolutely reliable, but there’s no harm if it’s a little adjusted: Trips take people, whom you want to travel with.',
	    'quoteTwo' : 'Travelling is all about the experience. And that experience depends on people you are with. As it is, soulmates are not so easy to find. To find yours, you have to know how to search and for what. So here’s some tips.'
	    }

	$(".quotes").html(compiledTemplate(quotesDouble));


	// NEW LIST
	 var newList = {
	 	'newListWord' : 'New list'
	 }

	$(".new-list").html(compiledTemplate(newList));


	// LIST-ITEMS JSON
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/posts',
		method: 'GET',
		dataType: 'json'
	}).done(function(data){
		console.log(data);
		$.each(data,function(index, element){
			$('.list-items').append('<div class="item"><h3>'+element.id+'. '+
				element.title+'</h3><div class="short-text">'+element.body+'</div</div>');
		});
	});


	// FOOTER
	 var footerPrase = {
	 	'footerWord' : 'Generated footer'
	 }

	$(".footer").html(compiledTemplate(footerPrase));

});
