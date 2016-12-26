$(function(){


	$("#form-product").find('[name="min_price"]').mask('000.000.000.000.000,00', {reverse: true})
	$("#form-product").find('[name="price"]').mask('000.000.000.000.000,00', {reverse: true});
	
	$("#form-product").bootstrapValidator({
	    live: 'enabled',
	    submitButtons: 'button[type="submit"]'
	});
});