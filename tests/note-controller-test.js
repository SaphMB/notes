describe("Note Controller", function() {

  var elementMock = {}
  var noteListMock = new MockObject('noteList', ['createNote'])

  function NoteListViewMock() {}
  NoteListViewMock.prototype = {
    getHTML: function() { return HTMLString; }
  };

  var noteController = new NoteController(elementMock, noteListMock, NoteListViewMock);
  var HTMLString = "<ul><li><div>Favourite food: not pesto</div></li></ul>"

  it("can be instantiated", function() {
    assert.truthy(noteController instanceof NoteController);
  });

  noteController.displayNoteList()
  it("inner HTML property of element is set", function() {
    assert.truthy(elementMock.innerHTML === HTMLString);
  });
});
