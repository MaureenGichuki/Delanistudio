$(document).ready(function(){

	$('#icon').click(function(){
        $('.ic').toggle();
        $('#m61').toggle();
	});
    $('#icon1').click(function(){
        $('.ic1').toggle();
        $('#m62').toggle();
    });
    $('#icon2').click(function(){
        $('.ic2').toggle();
        $('#m63').toggle();
    });


    // hover --->
    $('.f411').hover(function() {
        $(this).animate({opacity:0.4});
        $('.f1i').fadeIn();

    }, function() {
        $(this).animate({opacity:1})
        $('.f1i').fadeOut();
    });

    $('.f412').hover(function() {
        $(this).animate({opacity:0.3});
        $('.f2i').fadeIn();

    }, function() {
        $(this).animate({opacity:1})
        $('.f2i').fadeOut();
    });

    $('.f413').hover(function() {
        $(this).animate({opacity:0.3});
        $('.f3i').fadeIn();

    }, function() {
        $(this).animate({opacity:1})
        $('.f3i').fadeOut();
    });

    $('.f414').hover(function() {
        $(this).animate({opacity:0.3});
        $('.f4i').fadeIn();

    }, function() {
        $(this).animate({opacity:1})
        $('.f4i').fadeOut();
    });

    $('.f421').hover(function() {
        $(this).animate({opacity:0.3});
        $('.f5i').fadeIn();

    }, function() {
        $(this).animate({opacity:1})
        $('.f5i').fadeOut();
    });

    $('.f422').hover(function() {
        $(this).animate({opacity:0.3});
        $('.f6i').fadeIn();

    }, function() {
        $(this).animate({opacity:1})
        $('.f6i').fadeOut();
    });

    $('.f423').hover(function() {
        $(this).animate({opacity:0.3});
        $('.f7i').fadeIn();

    }, function() {
        $(this).animate({opacity:1})
        $('.f7i').fadeOut();
    });

    $('.f424').hover(function() {
        $(this).animate({opacity:0.3});
        $('.f8i').fadeIn();

    }, function() {
        $(this).animate({opacity:1})
        $('.f8i').fadeOut();
    });

});
    function myFunction(name,email,text){
    var name = $('#nm1').val();
    var email = $('#em1').val();
    var text = $('#mm1').val();

    if(name == ''|| email== '' || text == ''){
        alert("Invalid! Please make sure to fill in all slots and input correct values on the form");
    }
    else(
        alert( "Hey" + " " + name + " " + "we have received your message. Thank you for reaching out to us")
        
    );
    };
