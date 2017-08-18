describe('single note view', function() {
	var noteMock = new MockObject('note', ['text']);
	noteMock.text().returnValue("I am a test");

	var singleNoteView = new SingleNoteView(noteMock);

	it('returns an html string representing the note model', function() {
		assert.truthy(singleNoteView.getHTML() === "<div>I am a test</div>")
	})
})
