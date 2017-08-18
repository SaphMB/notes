describe('note-model', function() {
	var note = new Note("JS is alright")

	it('stores text as a property of a note', function() {
		assert.truthy(note.text() === "JS is alright")
	});
});
