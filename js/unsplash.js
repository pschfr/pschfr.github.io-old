function randomBackground(time) { // daily, weekly, or every time
	var categories = ['buildings', /*'food',*/ 'nature', /*'people', 'technology', 'objects'*/];
	var randomCategory = Math.floor((Math.random() * categories.length));
	var photo = new UnsplashPhoto();

	if (time == 'daily' || time == 'weekly')
		photo.all().randomize(time).of('space').fetch();
	else
		photo.all().of('space').fetch();

	document.getElementById('top').style.backgroundImage = "url(" + photo.url + ")";
	document.getElementById('footer').style.backgroundImage = "url(" + photo.url + ")";
}
window.onload = function() {
	randomBackground();
};
