(function(exports) {
	function NoteController(element, noteList, noteListView) {
		this.element = element;
		this.noteList = noteList;
		this.noteList.createNote('I like to party');
		this.noteListView = new noteListView(this.noteList);
	}

	NoteController.prototype = {
		displayNoteList: function() {
			var content = this.noteListView.getHTML();
			this.element.innerHTML = content;
		}
	}

	exports.NoteController = NoteController;
})(this);
