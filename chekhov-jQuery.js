$(function() {
	var stories = $(".story");
	stories.each(function(index, story) { console.log(story); makeStoryHidden(story);  });
});

function makeStoryHidden(storyElement) {
	var newLink = $(document.createElement('a'));
	newLink.html("Continue reading");
	$(storyElement).children("p:eq(2)").append(newLink);
	$(storyElement).children("p:gt(2)").hide();



	newLink.attr("href","#");
	newLink.attr( "class", "more-link" );

	// newLink.on( "click", function(event) {
	// 	event.preventDefault();
	// }	
	
	var hiddenP = $(storyElement).children("p:gt(2)");
	newLink.click(function(event){
		event.preventDefault();
    	$(hiddenP).toggle();
	});
    
	// $( "a" ).toggle();

}

