// Initiates Trianglify
var pattern = Trianglify({
    height: document.getElementById('site_header').getClientRects()[0].height,
    width:  document.getElementById('site_header').getClientRects()[0].width,
    x_colors: 'Greys'
});
document.getElementById('site_header').appendChild(pattern.canvas());
