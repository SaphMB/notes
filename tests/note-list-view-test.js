describe('Note list model', function() {

  var noteMock = new MockObject('note', ['text']);
	noteMock.text().returnValue("I am a test");

	var emptyNoteListMock = new MockObject('noteList', ['notes']);
	emptyNoteListMock.notes().returnValue([]);

	var singleNoteListMock = new MockObject('noteList', ['notes']);
	singleNoteListMock.notes().returnValue([noteMock]);

	var manyNoteListMock = new MockObject('noteList', ['notes']);
	manyNoteListMock.notes().returnValue([noteMock, noteMock]);

	var emptyNoteListView = new NoteListView(emptyNoteListMock)
	var singleNoteListView = new NoteListView(singleNoteListMock)
	var manyNoteListView = new NoteListView(manyNoteListMock)

	it('returns an empty html string when there are no notes', function() {
		assert.truthy(emptyNoteListView.getHTML() === "<ul></ul>");
	});

	it('returns an html string for list with a single note', function() {
		assert.truthy(singleNoteListView.getHTML() === "<ul><li><div>I am a test</div></li></ul>");
	});
	it('returns an html string for list with many notes', function() {
		assert.truthy(manyNoteListView.getHTML() === "<ul><li><div>I am a test</div></li><li><div>I am a test</div></li></ul>");
	});

});
