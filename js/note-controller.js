(function(exports) {
	function NoteController() {
		this.getAppElement();
	}

	NoteController.prototype.getAppElement = function() {
		var element = document.getElementById('app');
		element.innerHTML = "Something else";
	};

	exports.NoteController = NoteController;
})(this);
