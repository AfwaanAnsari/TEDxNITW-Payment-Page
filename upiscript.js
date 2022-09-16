$(document).ready(function(){

        // Radio button
        $('.radio-group .radio').click(function(){
            $(this).parent().parent().find('.radio').removeClass('selected');
            $(this).addClass('selected');
        });
    })

