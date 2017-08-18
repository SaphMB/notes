describe('Note list model', function() {
  function NoteMock() {};
  var noteList = new NoteList(NoteMock);

  it('holds an array of note models', function() {
    assert.truthy(noteList.notes() instanceof Array)
  })
  noteList.createNote('testing');
  it('creates note model', function() {
    assert.truthy(noteList.notes()[0] instanceof NoteMock);
  });
  it('stores note model', function() {
    assert.truthy(noteList.notes().length === 1);
  });
});
