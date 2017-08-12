/**
 * Created by ptithom on 27/07/2017.
 */


$('ul.list_hobbies').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:"<i class='fa fa-chevron-left' aria-hidden='true'></i>",
    nextArrow:"<li class='fa fa-chevron-right' aria-hidden='true'></i>"
});

$.ajax({
    type: "POST",
    url: "/Catskills/show_list",
    success: function(response) {
        $('#skills .wrapper_skills').html(response).promise().done(function(){
            console.log('ok');
            $('ul.list_xp').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow:"<i class='fa fa-chevron-left' aria-hidden='true'></i>",
                nextArrow:"<li class='fa fa-chevron-right' aria-hidden='true'></i>"
            });
        });
    }
});

$(document).on('click','.list_xp li[data-name]',function(){
    var name_s = $(this).data("ref");

    $.ajax({
        type: "POST",
        url: "/Societes/info_societe",
        data: "societe="+name_s,
        beforeSend: function() {
            $('#xp .content_more').html($('.wait').clone().removeClass('hidden'))
        },
        success: function(response) {
            $('#xp .content_more').html(response);
        }
    });

});
$(document).on('click','#xp .close',function(){
    $('#xp .content_more').html("");
});

$.ajax({
    type: "POST",
    url: "/Societes/show_list",
    success: function(response) {
        $('#xp .wrapper_xp').html(response);
    }
});

$.ajax({
    type: "POST",
    url: "/feed",
    success: function(response) {
        $('#feed .wrapper_feed').html(response);
    }
});