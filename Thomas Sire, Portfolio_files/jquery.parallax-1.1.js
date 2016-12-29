




/*
     FILE ARCHIVED ON 23:54:52 nov. 4, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 0:02:52 nov. 25, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
Plugin: jQuery Parallax
Version 1.1
Author: Ian Lunn
Author URL: /web/20161104235452/http://www.ianlunn.co.uk/
Plugin URL: /web/20161104235452/http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
/web/20161104235452/http://www.opensource.org/licenses/mit-license.php
/web/20161104235452/http://www.gnu.org/licenses/gpl.html
*/



(function( $ ){
$.fn.parallax = function(xpos, adjuster, inertia, outerHeight) {

function inView(pos, element){

element.each(function(){ //for each selector, determine whether it's inview and run the move() function

var element = $(this);
var top = element.offset().top;

if(outerHeight == true){
var height = element.outerHeight(true);
}else{
var height = element.height();
}

//above & in view
if(top + height >= pos && top + height - windowHeight < pos){
move(pos, height);
}

//full view
if(top <= pos && (top + height) >= pos && (top - windowHeight) < pos && top + height - windowHeight > pos){
move(pos, height);
}

//below & in view
if(top + height > pos && top - windowHeight < pos && top > pos){
move(pos, height);
}
});
}

var $window = $(window);
var windowHeight = $(window).height();
var pos = $window.scrollTop(); //position of the scrollbar
var $this = $(this);

//setup defaults if arguments aren't specified
if(xpos == null){xpos = "50%"}
if(adjuster == null){adjuster = 0}
if(inertia == null){inertia = 0.1}
if(outerHeight == null){outerHeight = true}

height = $this.height();
$this.css({'backgroundPosition': newPos(xpos, outerHeight, adjuster, inertia)});

function newPos(xpos, windowHeight, pos, adjuster, inertia){
return xpos + " " + (Math.round((-((windowHeight + pos) - adjuster) * inertia))) + "px";
}

//function to be called whenever the window is scrolled or resized
function move(pos, height){
$this.css({'backgroundPosition': newPos(xpos, height, pos, adjuster, inertia)});
}

$window.bind('scroll', function(){ //when the user is scrolling...
var pos = $window.scrollTop(); //position of the scrollbar
inView(pos, $this);

$('#pixels').html(pos);
})
}
})( jQuery );