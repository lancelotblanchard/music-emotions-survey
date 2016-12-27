$(function(){
	//var sampleTags = ['Apple', 'Orange', 'c++', 'java', 'php', 'coldfusion', 'javascript', 'asp', 'ruby', 'python', 'c', 'scala', 'groovy', 'haskell', 'perl', 'erlang', 'apl', 'cobol', 'go', 'lua'];
	var sampleTagsFrench = ['Joie', 'Colère', 'Haine', 'Rage', 'Tristesse', 'Peur', 'Tranquillité', 'Soulagement', 'Interrogation', 'Angoisse', 'Peine', 'Dégoût', 'Stress', 'Frustration', 'Tension', 'Dérangement', 'Fureur', 'Exaspération', 'Affolement',
	'Excitation', 'Alerte', 'Confusion', 'Réticence', 'Désarroi', 'Détresse', 'Déprime', 'Effroi', 'Épouvante', 'Désespoir', 'Méfiance', 'Ennui', 'Perplexité', 'Épuisement', 'Résignation' ,'Perturbation', 'Impuissance', 'Solitude', 'Pression', 'Souffrance',
	'Gêne', 'Lassitude', 'Surprise', 'Terreur', 'Calme'];

	//-------------------------------
	// Single field
	//-------------------------------
	$('#emotions-field').tagit({
	availableTags: sampleTagsFrench,
	// This will make Tag-it submit a single form value, as a comma-delimited field.
	singleField: true,
	singleFieldNode: $('#emotions-values')
	});


	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	var list_music=['asdg_ftsombaf','b_s2','c_xy','cc_o','css_dm','dl_ritd','ee_pac','gd_sj','gg_rib','jc_gs','jc_oos','jsb_ags','jt_cstf','jw_oa','lb_s72','m_ctk','m_ste','mo_tb','rw_ms','s_b','tc_ms','tdbq_bralt','wam_ps141'];
	var music=shuffle(list_music);
	var progress=parseInt($('#survey > div > div').attr('id').split("-")[2]);
	$("#music_player").attr("src", "music/"+music[progress-2]+".mp3");
});
