$(document).ready(function(){

	$('#icon').click(function(){
        $('#m61').toggle();
	});
    $('#icon1').click(function(){
        $('#m62').toggle();
    });
    $('#icon2').click(function(){
        $('#m63').toggle();
    });
});
    function myFunction(name,email,text){
    var name = $('#nm1').val();
    var email = $('#em1').val();
    var text = $('#mm1').val();

    if(name == ''|| email== '' || text == ''){
        alert("Invalid please input the correct values on the form !");
    }
    else(
        alert( "Hey" + " " + name + " " + "we have received your message. Thank you for reaching out to us")
        
    );
    };
