$(function(){
	//var sampleTags = ['Apple', 'Orange', 'c++', 'java', 'php', 'coldfusion', 'javascript', 'asp', 'ruby', 'python', 'c', 'scala', 'groovy', 'haskell', 'perl', 'erlang', 'apl', 'cobol', 'go', 'lua'];
	var sampleTagsFrench = ['Joie', 'Colère', 'Haine', 'Rage', 'Tristesse', 'Peur', 'Tranquillité', 'Soulagement', 'Interrogation', 'Angoisse', 'Peine', 'Dégoût', 'Stress', 'Frustration', 'Tension', 'Dérangement', 'Fureur', 'Exaspération', 'Affolement',
	'Excitation', 'Alerte', 'Confusion', 'Réticence', 'Désarroi', 'Détresse', 'Déprime', 'Effroi', 'Épouvante', 'Désespoir', 'Méfiance', 'Ennui', 'Perplexité', 'Épuisement', 'Résignation' ,'Perturbation', 'Impuissance', 'Solitude', 'Pression', 'Souffrance',
	'Gêne', 'Lassitude', 'Surprise', 'Terreur'];

	//-------------------------------
	// Single field
	//-------------------------------
	$('#emotions-field').tagit({
	availableTags: sampleTagsFrench,
	// This will make Tag-it submit a single form value, as a comma-delimited field.
	singleField: true,
	singleFieldNode: $('#emotions-values')
	});
});
