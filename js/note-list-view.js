(function(exports) {
	function NoteListView(noteList) {
		this.noteList = noteList;
		console.log(noteList)
	}

	// NoteListView.prototype = {
	// 	getHTML: function() {
	// 		var htmlToReturn = "<ul>";
	// 		this.noteList.notes().forEach(function(note) {
	// 			htmlToReturn += "<li><div>" + note.text() + "</div></li>"
	// 		})
	// 		htmlToReturn += "</ul>"
	// 		return htmlToReturn
	// 	}
	// };

	NoteListView.prototype.getHTML = function() {
		var htmlToReturn = "<ul>";
		this.noteList.notes().forEach(function(note) {
			htmlToReturn += "<li><div>" + note.text() + "</div></li>"
		})
		htmlToReturn += "</ul>"
		return htmlToReturn
	};
	exports.NoteListView = NoteListView;
})(this);
