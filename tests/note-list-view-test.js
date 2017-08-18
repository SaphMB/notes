describe('Note list model', function() {

	var noteMock = {
		text: function() {
			return "I am a test"
		}
	};

	var emptyNoteListMock = {
		notes: function() {
			return []
		}
	};

	var singleNoteListMock = {
		notes: function() {
			return [noteMock]
		}
	};

	var manyNoteListMock = {
		notes: function() {
			return [noteMock, noteMock]
		}
	};

	var emptyNoteListView = new NoteListView(emptyNoteListMock)
	var singleNoteListView = new NoteListView(singleNoteListMock)
	var manyNoteListView = new NoteListView(manyNoteListMock)

	it('returns an empty html string when there are no notes', function() {
		assert.truthy(emptyNoteListView.getHTML() === "<ul></ul>")
	})

	it('returns an html string for list with a single note', function() {
		assert.truthy(singleNoteListView.getHTML() === "<ul><li><div>I am a test</div></li></ul>")
	})
	it('returns an html string for list with many notes', function() {
		assert.truthy(manyNoteListView.getHTML() === "<ul><li><div>I am a test</div></li><li><div>I am a test</div></li></ul>")
	})


});
