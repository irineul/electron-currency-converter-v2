$(function(){

	$("#form-user").bootstrapValidator({
	    fields:{
	      'password': {
	        validators: {
	          identical: {
	              field: 'repeat-password',
	              message: 'A sua senha e confirmação da senha não são os mesmos'
	          }
	        }
	      },
	      'repeat-password': {
	        validators: {
	          identical: {
	              field: 'password',
	              message: 'A sua senha e confirmação da senha não são os mesmos'
	          }
	        }
	      }
	    },
	    live: 'enabled',
	    submitButtons: 'button[type="submit"]'
	});
});