function lastFM_request(method, username, API_key, number, elementID) {
	var lastFMurl = 'https://ws.audioscrobbler.com/2.0/?method=' + method + '&user=' + username + '&api_key=' + API_key + '&limit=' + number + '&format=json';
	var element   = document.getElementById(elementID);
	var xmlhttp   = new XMLHttpRequest();
	xmlhttp.open('GET', lastFMurl, true);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if(xmlhttp.status == 200) {
				var obj = JSON.parse(xmlhttp.responseText);
				if (method == 'user.gettopartists') {
					element.innerHTML += "<h3>My Top Artists</h3>";
					element.innerHTML += "<h4 class='text-muted text-uppercase' style='letter-spacing:.2rem;margin:0 0 3rem;'>From <a href='https://www.last.fm/user/" + obj.topartists['@attr'].user + "' target='_blank' rel='noreferrer noopener' style='color:inherit;'>Last.fm</a></h4>";
					for (i = 0; i < number; i++) {
						var artist = obj.topartists.artist[i];
						element.innerHTML += "<p><a href='" + artist.url + "' target='_blank' rel='noreferrer noopener'>" + artist.name + "</a> <small><em>with " + artist.playcount + " plays.</em></small></p>";
					}

				} else if (method == 'user.getrecenttracks') {
					var track = obj.recenttracks.track[0];
					var total = obj.recenttracks['\@attr'].total;
					console.log(total);
					if (track['\@attr'] && track['\@attr'].nowplaying !== '')
						element.innerHTML += 'I am currently listening to:<br/>';
					else
						element.innerHTML += 'I last listened to:<br/>';
					element.innerHTML += '<a href="' + track.url + '" target="_blank" rel="noreferrer noopener" title="on album: ' + track.album['\#text'] + '">' + track.artist['\#text'] + ' &mdash; ' + track.name + '</a> ';
					element.innerHTML += '<br/><br/><p><small><em>' + total + ' tracks total!</em></small></p>';
				}
			}
		}
	};
	xmlhttp.send(null);
}
lastFM_request('user.gettopartists',   'paul_r_schaefer', '0f680404e39c821cac34008cc4d803db', '5', 'topartists');
setInterval(lastFM_request('user.getrecenttracks', 'paul_r_schaefer', '0f680404e39c821cac34008cc4d803db', '5', 'currentlylistening'), 5000);
