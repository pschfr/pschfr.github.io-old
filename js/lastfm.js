// Connects to Last.FM, retrives most recent song
function lastFM_request() {
	var username  = 'paul_r_schaefer';
	var API_key   = '0f680404e39c821cac34008cc4d803db';
	var lastFMurl = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + username + '&api_key=' + API_key + '&limit=1&format=json';
	var element   = document.getElementById('lastFM');
	element.innerHTML = '';
	var xmlhttp   = new XMLHttpRequest();
	xmlhttp.open('GET', lastFMurl, true);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if(xmlhttp.status == 200) {
				var track = JSON.parse(xmlhttp.responseText).recenttracks.track[0];
				element.innerHTML += '<img src="' + track.image[3]['\#text'] + '" alt="' + track.album['\#text'] + ' by ' + track.artist['\#text'] + '" class="small-margin" />';
				if (track['\@attr'] && track['\@attr'].nowplaying !== '')
					element.innerHTML += '<br>I am currently listening to: ';
				else
					element.innerHTML += '<br>I last listened to: ';
				element.innerHTML += '<a href="' + track.url + '" title="on album: ' + track.album['\#text'] + '">' + track.artist['\#text'] + ' &mdash; ' + track.name + '</a> ';
			 }
		}
	};
	xmlhttp.send(null);
}
lastFM_request();
