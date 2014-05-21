//Globals
var a = $('#a'),
    b = $('#b'),
    c = $('#c'),
    d = $('#d'),
    e = $('#e'),
    f = $('#f');

//Cross Browser animation event handling
var pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
	for (var p = 0; p < pfx.length; p++) {
		if (!pfx[p]) type = type.toLowerCase();
		element.addEventListener(pfx[p]+type, callback, false);
	}
}

/*
PrefixedEvent(anim, "AnimationStart", AnimationListener);
PrefixedEvent(anim, "AnimationIteration", AnimationListener);
PrefixedEvent(anim, "AnimationEnd", AnimationListener);

Animation event object attributes
- animationName: the CSS3 animation name (i.e. flash)
- elapsedTime: the time in seconds since the animation started.

animation-play-state
- This enables you to determine if an animation is running
- https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state

*/

function scrollBehavior(eventObject) {

    var a_offset = a.offset(),
        b_offset = b.offset(),
        c_offset = c.offset(),
        a_height = a.outerHeight(false),
        b_height = b.outerHeight(false),
        c_height = c.outerHeight(false),
        e_height = e.outerHeight(false),
        f_height = f.outerHeight(false),
        current_position = $(this).scrollTop();

    if (c_offset.top - current_position < 0) {
        console.log('Hit C');
        $('#c').addClass('effect');
        $('#b').removeClass('effect');
        $('#a').removeClass('effect');
    } else {
        if (b_offset.top - current_position < 0) {
            console.log('Hit B');
            $('#b').addClass('effect');
            $('#a').removeClass('effect');
            $('#c').removeClass('effect');
        } else {
            if (a_offset.top - (current_position - a_height/2) < 0) {
                console.log('Hit A');
                $('#a').addClass('effect');
                $('#b').removeClass('effect');
                $('#c').removeClass('effect');
            }
        }
    }

    if((current_position - f.offset().top > 0) &&
       (current_position - (f.offset().top + f_height) < 0)) {
           f.addClass("theEffect");
    } else {
        f.removeClass("theEffect");
    }

    if((current_position - (e.offset().top - 100) > 0) &&
       (current_position - (e.offset().top + e_height) < 0)) {
        e.addClass("attention-animation");
    } else {
        e.removeClass("attention-animation");
    }
}

$(window).scroll(scrollBehavior);
