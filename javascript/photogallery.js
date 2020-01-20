document.getElementById('photo-gallery').innerHTML = "Loading pictures...";

window.onload = function () {
	// The list of events (all fields are mandatory)
	photos = [
		{
			"thumbnail": "./images/running-pretty.jpg",
			"picture": "https://lh3.googleusercontent.com/cQuc1MeITNClHu5YEbu6wAlgnvkTrbG8LGog9AOjYdIxcHNfI3Trk3irG3OZ-W9rDCFCe52PCjOUPaO9xjN6LvsGYf3M0x0Hu29S4flODRLsbraPRvgh3E_NtWLiImwOFcWOsE9dK3VnwkLAGrlKFIY78kPCRKgtchQ8K3JQiL__rTcdTL0m5tk5CHOFkAF8r1iCGYIpZDNTYxZIpm9kSceBvdchYVSKrwW1LuqHw42BjtbkbNK5ZNjiA-I6ocODmWedmIHUwUDt-Hcc09A0yJfIfh505K8dpplnxutF4Pbuk9vOqvb9wbb-qjMj_oFlqAy8_QxybqiYogmA8SgSYq1j3XgMkCUJcAjU6PHD6VBuwjb6VF4G_6nOO0aNVGZvK2ZALWqrHvhFftXjJ_vSljXYfECNf5XUwYEIgT9YqbBz85TkY2eQw2ZMXVsfKP_XBDqHgkZFDk5NMQ741WMf_xri2nA9C1qZVAzRt0TEuK643UdWR5qlZVUyrrEkXfFO55g_M0J94uPBNnb9WgpPH_Rf87NemkmCl6q8OmhdO_r0ovWtWXauy4A3ffwQ4_r-fO7W7FjOaeepX2YRq5XI-vVXND4AwWc-4xV6dcUrN4H7FqatZsPyAYBNpnnOVEEJ15uZnV4wzQtX1KierYUZ7xe99YI7HChdQoZlz3GNn4crlvj5Pk65dYyFo1-1a9v3_V6zBq_GhTWYY_S6f2EUXq8k6zRWzuAu4X7QZvIIkNoYoNd6=w1250-h937-no",
			"desc": "Someone doing a thing",
			"caption": "I'm a caption!",
		},
		{
		    "thumbnail": "./images/running-pretty.jpg",
		    "picture": "https://lh3.googleusercontent.com/cQuc1MeITNClHu5YEbu6wAlgnvkTrbG8LGog9AOjYdIxcHNfI3Trk3irG3OZ-W9rDCFCe52PCjOUPaO9xjN6LvsGYf3M0x0Hu29S4flODRLsbraPRvgh3E_NtWLiImwOFcWOsE9dK3VnwkLAGrlKFIY78kPCRKgtchQ8K3JQiL__rTcdTL0m5tk5CHOFkAF8r1iCGYIpZDNTYxZIpm9kSceBvdchYVSKrwW1LuqHw42BjtbkbNK5ZNjiA-I6ocODmWedmIHUwUDt-Hcc09A0yJfIfh505K8dpplnxutF4Pbuk9vOqvb9wbb-qjMj_oFlqAy8_QxybqiYogmA8SgSYq1j3XgMkCUJcAjU6PHD6VBuwjb6VF4G_6nOO0aNVGZvK2ZALWqrHvhFftXjJ_vSljXYfECNf5XUwYEIgT9YqbBz85TkY2eQw2ZMXVsfKP_XBDqHgkZFDk5NMQ741WMf_xri2nA9C1qZVAzRt0TEuK643UdWR5qlZVUyrrEkXfFO55g_M0J94uPBNnb9WgpPH_Rf87NemkmCl6q8OmhdO_r0ovWtWXauy4A3ffwQ4_r-fO7W7FjOaeepX2YRq5XI-vVXND4AwWc-4xV6dcUrN4H7FqatZsPyAYBNpnnOVEEJ15uZnV4wzQtX1KierYUZ7xe99YI7HChdQoZlz3GNn4crlvj5Pk65dYyFo1-1a9v3_V6zBq_GhTWYY_S6f2EUXq8k6zRWzuAu4X7QZvIIkNoYoNd6=w1250-h937-no",
		    "desc": "Someone doing a thing",
		    "caption": "I'm a caption!",
		},
		{
		    "thumbnail": "./images/running-pretty.jpg",
		    "picture": "https://lh3.googleusercontent.com/cQuc1MeITNClHu5YEbu6wAlgnvkTrbG8LGog9AOjYdIxcHNfI3Trk3irG3OZ-W9rDCFCe52PCjOUPaO9xjN6LvsGYf3M0x0Hu29S4flODRLsbraPRvgh3E_NtWLiImwOFcWOsE9dK3VnwkLAGrlKFIY78kPCRKgtchQ8K3JQiL__rTcdTL0m5tk5CHOFkAF8r1iCGYIpZDNTYxZIpm9kSceBvdchYVSKrwW1LuqHw42BjtbkbNK5ZNjiA-I6ocODmWedmIHUwUDt-Hcc09A0yJfIfh505K8dpplnxutF4Pbuk9vOqvb9wbb-qjMj_oFlqAy8_QxybqiYogmA8SgSYq1j3XgMkCUJcAjU6PHD6VBuwjb6VF4G_6nOO0aNVGZvK2ZALWqrHvhFftXjJ_vSljXYfECNf5XUwYEIgT9YqbBz85TkY2eQw2ZMXVsfKP_XBDqHgkZFDk5NMQ741WMf_xri2nA9C1qZVAzRt0TEuK643UdWR5qlZVUyrrEkXfFO55g_M0J94uPBNnb9WgpPH_Rf87NemkmCl6q8OmhdO_r0ovWtWXauy4A3ffwQ4_r-fO7W7FjOaeepX2YRq5XI-vVXND4AwWc-4xV6dcUrN4H7FqatZsPyAYBNpnnOVEEJ15uZnV4wzQtX1KierYUZ7xe99YI7HChdQoZlz3GNn4crlvj5Pk65dYyFo1-1a9v3_V6zBq_GhTWYY_S6f2EUXq8k6zRWzuAu4X7QZvIIkNoYoNd6=w1250-h937-no",
		    "desc": "Someone doing a thing",
		    "caption": "I'm a caption!",
		},
	];
		
	// Put the photos on the page
	if (photos.length > 0) {
		document.getElementById('photo-gallery').innerHTML = convertEventObjectsToDiv(photos);
	}
	
	/**
		This function converts an array of photos into divs
	*/
	function convertEventObjectsToDiv(photos) {
		var returnHtml = "";
		
		// Make a div for each photo
		for (var index in photos) {
			thisEvent = '<div><a href="' + photos[index]["picture"] + '" target="_blank" rel="noreferrer">' +
				'<img src=' + photos[index]["thumbnail"] + ' alt="' + photos[index]["desc"] + '"></a>' +
				photos[index]["caption"] + '</div>';

			// Append it to the list of divs we have going
			returnHtml = returnHtml + thisEvent;
		}
		
		// Return all the divs
		return returnHtml;
	}
}
