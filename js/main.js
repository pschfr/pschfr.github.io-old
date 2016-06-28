// Initiates Trianglify
var site_header = document.getElementById('site_header');
var dimensions = site_header.getClientRects()[0];
var pattern = Trianglify({
    width: dimensions.width,
    height: dimensions.height
});
site_header.appendChild(pattern.canvas());

// Tweaks ZenScroll default speed
zenscroll.setup(500);

// Listens for scroll events
var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

// Removes Trianglify and reloads on resize
addEvent(window, "resize", function(event) {
    var pattern_canvas = site_header.getElementsByTagName('canvas')[0];
    var old_pattern    = pattern_canvas.remove();
    site_header.appendChild(pattern.canvas());
    console.log('resized');
    console.log(pattern_canvas);
});

// Magic that disables pointer events on scroll, really improves performance
var body = document.body, timer;
window.addEventListener('scroll', function() {
	clearTimeout(timer);
	if(!body.classList.contains('disable-hover')) {
		body.classList.add('disable-hover');
	}
	timer = setTimeout(function() {
		body.classList.remove('disable-hover');
	}, 100);
}, false);

// Much faster than loading in tweet and like buttons, just send URL to share URL
// TODO: Rewrite in vanilla JS
$("a.js-social-share").on("click", function(e) {
	e.preventDefault();
	function windowPopup(url, width, height) {
		var left = (screen.width / 2) - (width / 2), top = (screen.height / 2) - (height / 2);
		window.open(url, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
	}
	windowPopup($(this).attr("href"), 500, 500);
	console.log('share window popped up');
});
