(function() {
	var element = document.getElementById('app');
	var noteList = new NoteList(Note);
	var noteController = new NoteController(element, noteList, NoteListView);
	noteController.displayNoteList()
})()
