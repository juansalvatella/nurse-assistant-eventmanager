$("#check-in-form").on('submit', function () {
    var data = {};
	$.each($("#check-in-form").serializeArray(), function(i, field) {
	    data[field.name] = field.value;
	});

    var object = {
    	"room_id" : $("#room-id .active").text(),
    	"reservation" : {
	    	"customer_name": data.customer_name,
			"customer_lastname": data.customer_lastname,
			"customer_email": data.customer_email,
			"customer_phone": data.customer_phone,
			"checkin_date": data.checkin_date,
			"checkout_date": data.checkout_date,
			"creditcard": {
				"number": data.cc_number,
			    "ccv": data.cc_cvs,
			    "expiration_month": data.cc_expiration_month,
			    "expiration_year": data.cc_expiration_year
			},
			"guests": [
			    {
			    	"name": data.guest_name_1,
			    	"lastname": data.guest_last_name_1
			    },
			    {
			    	"name": data.guest_name_2,
			    	"lastname": data.guest_last_name_2
			    }
			]
	    }
    };
    $.post( "/v1/CheckIn", object).done(function() {
    	window.location.replace("/bookings");
    });
    return false;
});