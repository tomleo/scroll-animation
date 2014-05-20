function scrollBehavior(eventObject) {
    var a = $('#a'),
        b = $('#b'),
        c = $('#c');
    var a_offset = a.offset(),
        b_offset = b.offset(),
        c_offset = c.offset();
    var a_height = a.height(),
        b_height = b.height(),
        c_height = c.height();
    var c_position = $(this).scrollTop();
    if (c_offset.top - c_position < 0) {
        console.log('Hit C');
        $('#c').addClass('effect');
        $('#b').removeClass('effect');
        $('#a').removeClass('effect');
    } else {
        if (b_offset.top - c_position < 0) {
            console.log('Hit B');
            $('#b').addClass('effect');
            $('#a').removeClass('effect');
            $('#c').removeClass('effect');
        } else {
            if (a_offset.top - (c_position - a_height/2) < 0) {
                console.log('Hit A');
                $('#a').addClass('effect');
                $('#b').removeClass('effect');
                $('#c').removeClass('effect');
            }
        }
    }
}

$(window).scroll(scrollBehavior);
