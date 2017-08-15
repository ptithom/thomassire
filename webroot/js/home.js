/**
 * Created by ptithom on 27/07/2017.
 */


$('ul.list_hobbies').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow:"<i class='fa fa-chevron-left' aria-hidden='true'></i>",
    nextArrow:"<li class='fa fa-chevron-right' aria-hidden='true'></i>"
});

$.ajax({
    type: "POST",
    url: "/Catskills/show_list",
    success: function(response) {
        $('#skills .wrapper_skills').html(response)
    }
});


$(document).ready(function(){
    $('[data-toggle="popover"]').popover({ trigger: "hover",placement:"bottom" });
});


$(document).on('click','.list_xp li[data-id]',function(){
    var id_s = $(this).data("id");

    $.ajax({
        type: "POST",
        url: "/Societes/info_societe",
        data: "id="+id_s,
        beforeSend: function() {
            $('#xp .content_more').html($('.wait').clone().removeClass('hidden'))
        },
        success: function(response) {
            $('#xp .content_more').html(response);
        }
    });

});

$(document).on('click','.view_project',function(){
    var elementli = $(this).closest('li');
    var id_skill = elementli.data("id_skill");

    $.ajax({
        type: "POST",
        url: "/Skills/list_project",
        data: "id_skill="+id_skill,
        beforeSend: function() {
            $('#skills .content_more').hide();
            elementli.next().html($('.wait').clone().removeClass('hidden')).show();
        },
        success: function(response) {
            elementli.next().html(response);
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
        $('#xp .wrapper_xp').html(response).promise().done(function(){
            $('ul.list_xp').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow:"<i class='fa fa-chevron-left' aria-hidden='true'></i>",
                nextArrow:"<li class='fa fa-chevron-right' aria-hidden='true'></i>"
            });
        });
    }
});

showfeed('all');

function showfeed(source){
    $.ajax({
        type: "POST",
        url: "/feed",
        data : 'source=' + source,
        beforeSend: function() {
            $('#feed .content_feed').html($('.wait').clone().removeClass('hidden'))
        },
        success: function(response) {
            $('#feed .content_feed').html(response);
            if($('#feed .list_cat_feed li.active').data('source') == 'all'){
                $('#feed .list_cat_feed li.reset').hide('faste');
            }else{
                $('#feed .list_cat_feed li.reset').show('faste');
            }
        }
    });
}

$(document).on('click','#feed .list_cat_feed li',function(){
    $('#feed .list_cat_feed li.active').removeClass('active');
    $(this).addClass('active');
    var source = $(this).data('source');
    showfeed(source);
});

/* effect smooth scroll */

$('a[href^="#"]').click(function(){
    var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top-56
    }, 'slow');
    return false;
});

/* back to top */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}