// responsive menu
$(document).ready(function() {
    // perform action on click
    $(".burger").click(function() {
        // add class body
        $("body").toggleClass("menu_adapt_open");
        // remove the class
        return false;
    });
});

// prohibit entering letters in the phone field
$(".input_just_number").keypress(function(event) {
    // designate a variable
    event = event || window.event;
    // designate a range of characters
    if (
        event.charCode &&
        event.charCode != 0 &&
        (event.charCode < 48 || event.charCode > 57)
    )
        return false;
});
// END.prohibit typing letters in the phone field

// main page slider
if ($(".mySwiper").length > 0) {
    // set slider settings
    // more details about each item here: https://swiperjs.com/swiper-api
    var swiper = new Swiper(".mySwiper", {
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
    });
}

// if there was a change in the filter form, then we trigger the submit form, provided that the form is present on the page
if ($("#gallery_form").length > 0) {
    // hang the event
    $(".filtr_type").change(function() {
        // trigger submit
        $("#gallery_form").submit();
    });
}

// ajax form processing on single pet page
$("#form_pet_adopt button.submit").click(function() {
    // stop submition of the form
    event.preventDefault();

    // flag form completion 
    var iterError = 0;

    // loop through all inputs and check if they are empty, if yes, then add a stroke, and if not empty, then remove the stroke
    $("#form_pet_adopt .one_form_wrap input").each(function(index) {
        // if val is empty
        if ($(this).val() == "") {
            // add a line
            $(this).addClass("error_line");
        } else {
            // remove the line
            $(this).removeClass("error_line");
        }
    });

    // do the same for select only
    if (
        $("#form_pet_adopt .country option:selected").text() == "Country/Region *"
    ) {
        // add a line
        $("#form_pet_adopt .country").addClass("error_line");
        // add a number to the flag variable to track
        iterError = iterError + 1;
    } else {
        // remove the line
        $("#form_pet_adopt .country").removeClass("error_line");
    }


    // email validation
    // credit: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    var email_val = $("#form_pet_adopt .email").val();
    // designate a range of characters
    var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // if matched, then remove the line
    if (email_val.match(validRegex)) {
        $("#form_pet_adopt .email").removeClass("error_line");
        $("#form_pet_adopt .email_err").addClass("d-none");
    } else {
        // if not, then add
        $("#form_pet_adopt .email").addClass("error_line");
        $("#form_pet_adopt .email_err").removeClass("d-none");
    }

    // go through the loop and check if there are elements with the class error_line, if so, we display an error message
    $("#form_pet_adopt .one_form_wrap input").each(function(index) {
        // if there is a line
        if ($(this).hasClass("error_line")) {
            // add a number to the flag variable to track
            iterError = iterError + index;
            // add a class for the success block
            $("#form_pet_adopt .success").addClass("d-none");
            // remove the class for the error block
            $("#form_pet_adopt .error ").removeClass("d-none");
        }
    });

    // if there were zero iterations, then we send data via ajax
    if (iterError == 0) {
        // make the button load state and disable it
        $(this).attr("disabled", "");
        $(this).addClass("load");
        // designate field variables
        var first_name = $("#form_pet_adopt .first_name").val();
        var last_name = $("#form_pet_adopt .last_name").val();
        var email = $("#form_pet_adopt .email").val();
        var phone = $("#form_pet_adopt .phone").val();
        var country = $("#form_pet_adopt .country option:selected").text();
        var any_text = $("#form_pet_adopt .any_text").val();
        var pageid = $("#form_pet_adopt #pageid").val();
        // form an array to pass
        var formData = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            country: country,
            any_text: any_text,
            pageid: pageid,
        };
        // call ajax and designate parameters
        $.ajax({
            url: "/pet",
            type: "POST",
            data: formData,
            dataType: "json",
            success: function(data, textStatus, jqXHR) {
                // if the submission is successful, then hide the button and show the success message and hide other messages
                if (data == true) {
                    $("#form_pet_adopt button.submit").addClass("d-none");
                    $("#form_pet_adopt .success").removeClass("d-none");
                    $("#form_pet_adopt .error ").addClass("d-none");
                    $("#form_pet_adopt .country").removeClass("error_line");
                    // loop through to reset the fields
                    $("#form_pet_adopt .one_form_wrap input").each(function(index) {
                        $(this).val("");
                    });
                    // loop through to reset the value of the selects
                    $("#form_pet_adopt select").each(function(index) {
                        $(this).prop("selectedIndex", 0);
                    });
                    // loop through to reset the value of fields with text
                    $("#form_pet_adopt textarea").each(function(index) {
                        $(this).val("");
                    });
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // if an error, then show the button, make it clickable and the error message, and remove the success message
                $(this).removeAttr("disabled");
                $("#form_pet_adopt button.submit").removeClass("d-none");
                $("#form_pet_adopt .success").addClass("d-none");
                $("#form_pet_adopt .error ").removeClass("d-none");
                $("#form_pet_adopt .country").removeClass("error_line");
            },
        });
    }
});
// END.ajax form handling of single pet page


// limit the number of characters on the maxlength attribute again
$("body").on("input", "input[maxlength]", function() {
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
    }
});

// track changes in the card number field in the donation form
$("#form_donate .card_number").on("click keyup change blur", function() {
    // if less than 16 characters
    if ($(this).val().length < 16) {
        // stroke the error
        $(this).addClass("error_line");
        // and show the error
        $(".card_number_err").removeClass("d-none");
    } else {
        // hide stroke
        $(this).removeClass("error_line");
        // hide error text
        $(".card_number_err").addClass("d-none");
    }
});

// track changes in the cvv field in the donation form
$("#form_donate .cvv").on("click keyup change blur", function() {
    // if less than 3 characters
    if ($(this).val().length < 3) {
        if (!$(this).val() == '') {
            // stroke the error
            $(this).addClass("error_line");
            // and show the error
            $(".cvv_err").removeClass("d-none");
        }
    } else {
        if (!$(this).val() == '') {
            // hide stroke
            $(this).removeClass("error_line");
            // hide error text
            $(".cvv_err").addClass("d-none");
        }

    }
});

// ajax form processing on the donation page
$("#form_donate button.submit").click(function() {
    // stop submition of the form
    event.preventDefault();

    // flag completeness of the form
    var iterError = 0;

    // loop through all inputs and check if they are empty, if yes, then add a stroke, and if not empty, then remove the stroke
    $("#form_donate .one_form_wrap input").each(function(index) {
        // if empty
        if ($(this).val() == "") {
            // add class with error
            $(this).addClass("error_line");
        } else {
            // otherwise remove the stroke
            $(this).removeClass("error_line");
        }
    });

    // do the same for select only
    $("#form_donate select").each(function(index) {
        // designate the select variable
        var node = $(this);
        // find the selected option and if it is none, then display an error
        if (node.find("option:selected").val() == "none") {
            $(this).addClass("error_line");
            // add a number to the flag variable
            iterError = iterError + 1;
        } else {
            // otherwise remove stroke
            $(this).removeClass("error_line");
        }
    });

    // email validation
    // designate the field variable
    // credit: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    var email_val = $("#form_donate .email").val();
    // denote the expression
    var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // if expression matches field
    if (email_val.match(validRegex)) {
        // remove stroke
        $("#form_donate .email").removeClass("error_line");
        $("#form_donate .email_err").addClass("d-none");
    } else {
        // otherwise add a stroke
        $("#form_donate .email").addClass("error_line");
        $("#form_donate .email_err").removeClass("d-none");
    }


    // go through the loop and check if there are elements with the class error_line, if so, we display an error message
    $("#form_donate .one_form_wrap input").each(function(index) {
        // if there is a class error_line
        if ($(this).hasClass("error_line")) {
            // add a number to the numb-flag variable
            iterError = iterError + index;
            // and hide success messages
            $("#form_donate .success").addClass("d-none");
            // and show error messages
            $("#form_donate .error ").removeClass("d-none");
        }
    });

    // if there were zero iterations, then we send data via ajax
    if (iterError == 0) {
        // make the button load state and disable it
        $(this).attr("disabled", "");
        $(this).addClass("load");
        // designate field variables
        var amount = Number($("#form_donate .amount").val());
        var card_number = $("#form_donate .card_number").val();
        var month = Number($("#form_donate .month option:selected").text());
        var year = Number($("#form_donate .year option:selected").text());
        var country = $("#form_donate .country option:selected").text();
        var first_name = $("#form_donate .first_name").val();
        var last_name = $("#form_donate .last_name").val();
        var email = $("#form_donate .email").val();
        var phone = $("#form_donate .phone").val();
        // designate the data to send
        var formData = {
            amount: amount,
            card_number: card_number,
            month: month,
            year: year,
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            country: country,
        };
        // call ajax and set parameters
        $.ajax({
            url: "/donate",
            type: "POST",
            data: formData,
            dataType: "json",
            success: function(data, textStatus, jqXHR) {
                // if the submission is successful, then hide the button and show the success message and hide other messages
                if (data == true) {
                    $("#form_donate button.submit").addClass("d-none");
                    $("#form_donate .success").removeClass("d-none");
                    $("#form_donate .success_text").removeClass("d-none");
                    $("#form_donate .error ").addClass("d-none");
                    $("#form_donate .country").removeClass("error_line");

                    // loop through to reset the fields
                    $("#form_donate .one_form_wrap input").each(function(index) {
                        $(this).val("");
                    });
                    // loop through to reset the value of the selects
                    $("#form_donate select").each(function(index) {
                        $(this).prop("selectedIndex", 0);
                    });
                    // loop through to reset the value of fields with text
                    $("#form_donate textarea").each(function(index) {
                        $(this).val("");
                    });
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // if an error, then show the button, make it clickable and the error message, and remove the success message
                $(this).removeAttr("disabled");
                $("#form_donate button.submit").removeClass("d-none");
                $("#form_donate .success").addClass("d-none");
                $("#form_donate .success_text").addClass("d-none");
                $("#form_donate .error ").removeClass("d-none");
                $("#form_donate .country").removeClass("error_line");
            },
        });
    }
});
// END.ajax form processing on the donation page

// launch fancybox
$(document).ready(function() {
    // run fancybox only if the page has this fancybox
    if ($(".fancybox").length > 0) {
        // launch
        $(".fancybox").fancybox();
    }
});

//  END.fancybox