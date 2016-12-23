$(function(){
	var sampleTags = ['Apple', 'Orange', 'c++', 'java', 'php', 'coldfusion', 'javascript', 'asp', 'ruby', 'python', 'c', 'scala', 'groovy', 'haskell', 'perl', 'erlang', 'apl', 'cobol', 'go', 'lua'];
	//-------------------------------
	// Single field
	//-------------------------------
	$('#emotions-field').tagit({
	availableTags: sampleTags,
	// This will make Tag-it submit a single form value, as a comma-delimited field.
	singleField: true,
	singleFieldNode: $('#emotions-values')
	});
 
});