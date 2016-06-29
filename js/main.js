// Initiates Trianglify
var site_header = document.getElementById('site_header');
var dimensions = site_header.getClientRects()[0];
var pattern = Trianglify({
    height: dimensions.height,
    width:  dimensions.width,
    x_colors: 'Greys'
});
site_header.appendChild(pattern.canvas());
