function makeStoryHidden(storyElement) {
	
		var newLink = document.createElement( "a" );
		var allParagraphs = storyElement.getElementsByTagName("p");
		var thirdParagraph = allParagraphs[2];

		function hideText() {
			newLink.innerHTML = "Continue reading";	
			for (var i = 3; i < allParagraphs.length; i++ ) {
		//	console.log( allParagraphs[ i ] );
		//	if( i === 0 ) {
		//        continue;
		//    }
			
				allParagraphs[ i ].style.display = "none";

			}
		}

		// function toggleText() {
		// 	if (allParagraphs[3].style.display == "none") {
		// 		newLink.innerHTML = "Hide";
		// 		for (var i = 3; i < allParagraphs.length; i++ ) {
		// 			allParagraphs[ i ].style.display = "block";

		// 		}

		// 	} else {
		// 		hideText();
		// 	}
		// }

		newLink.setAttribute("href","#");
		newLink.setAttribute( "class", "more-link" );


		thirdParagraph.appendChild(newLink);
		hideText();

		// newLink.addEventListener("click", toggleText, false);
		newLink.addEventListener("click", function (event) {
			event.preventDefault();
			if (allParagraphs[3].style.display == "none") {
				newLink.innerHTML = "Hide";
				for (var i = 3; i < allParagraphs.length; i++ ) {
					allParagraphs[ i ].style.display = "block";

				}

			} else {
				hideText();
			}
		}, false);
}


var stories = document.getElementsByClassName("story");
for (var j = 0; j < stories.length; j++) {
	makeStoryHidden(stories[j]);
}

