/**
 * Created by ptithom on 27/07/2017.
 */


$('ul.list_xp').slick({
    slidesToShow: 4,
    slidesToScroll: 1
});

$('ul.list_hobbies').slick({
    slidesToShow: 5,
    slidesToScroll: 1
});

$.ajax({
    type: "POST",
    url: "/feed",
    success: function(response) {
        $('#feed .wrapper_feed').html(response);
    }
});