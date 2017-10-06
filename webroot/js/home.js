/**
 * Created by ptithom on 27/07/2017.
 */


$('ul.list_hobbies').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow:"",
    nextArrow:"",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});

$('.banner').parallax("center", .2, 0.1, true);


$.ajax({
    type: "POST",
    url: "/Catskills/show_list",
    success: function(response) {
        $('#skills .wrapper_skills').html(response);
        $('[data-toggle="popover"]').popover({trigger: "click", placement: "bottom"});
        $('.wrapper_skill.md-size').equalize();
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
        url: "/Projects/list_project",
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

// this is the id of the form
$("#contactForm").submit(function(e) {

    $.ajax({
        type: "POST",
        url: $(this).attr('action'),
        data: $(this).serialize(), // serializes the form's elements.
        dataType: 'json',
        success: function(data)
        {
            if(data.error == 0){
                $(".wrapper_contact #contactForm").hide('faste');
                $(".wrapper_contact .message").html('<p>'+data.message+'</p>').show('faste');
                setTimeout(function(){
                    $(".wrapper_contact #contactForm").show('faste');
                    $(".wrapper_contact .message").hide('faste');
                }, 3000);
            }else{

            }
            console.log(data); // show response from the php script.
        }
    });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});

$(document).on('click','#xp .close',function(){
    $('#xp .content_more').html("");
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll < 10){
        $('nav').addClass('nav-top')
        $('nav').removeClass('bg-inverse')
    }else{
        $('nav').removeClass('nav-top')
        $('nav').addClass('bg-inverse')
    }
});

$.ajax({
    type: "POST",
    url: "/Societes/show_list",
    success: function(response) {
        $('#xp .wrapper_xp').html(response).promise().done(function(){
            $('ul.list_xp').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                prevArrow:"<i class='fa fa-chevron-left' aria-hidden='true'></i>",
                nextArrow:"<li class='fa fa-chevron-right' aria-hidden='true'></i>",
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
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