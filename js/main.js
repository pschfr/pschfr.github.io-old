// Initiates Trianglify
var pattern = Trianglify({
    height: document.getElementById('site_header').getClientRects()[0].height,
    width:  document.getElementById('site_header').getClientRects()[0].width,
    x_colors: ['#aaa', '#aaa'],
    y_colors: 'Purples'
});
document.getElementById('site_header').appendChild(pattern.canvas());

// Tweaks ZenScroll's default speed
zenscroll.setup(500);
