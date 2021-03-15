//show and hide if ...  
$(function() {
    $("#inputNat").change(function() {
        var val = $(this).val();
        if (val === "inne") {
            $("#div_inne").show('slow');
            $('#inne_input').attr('required',true); 
        } else {
            $("#div_inne").hide('slow');
            $("#inne_input").removeAttr('required'); 
        }
    });
    $(function() {
        $("#stan").change(function() {
            var val = $(this).val();
            if (val === "true") {
                $("#stancywilny").show('slow');
            } else {
                $("#stancywilny").hide('slow');
            }
        });
    });
    $(document).ready(function() {
        $('input[type="radio"]').click(function() {
            if ($(this).attr("value") == "no") {
                $("#mailsend").hide('slow');
            }
            if ($(this).attr("value") == "yes") {
                $("#mailsend").show('slow');
            }
        });
        $('input[type="radio"]').trigger('click'); // trigger the event
    });
});
