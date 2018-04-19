$(function(){

	$('#zip').keypress(function() {
	    var dInput = this.value;

	    if (dInput == "0000") {
	    	$('.dropdown-toggle').dropdown();
	    	
	    }
	    
	});

	$('#selectCat').change(function(){ 
	    $('#category').modal('show');
	});
});