(function(exports) {
  function NoteList(noteConstructor) {
    this._notes = [];
    this._note = noteConstructor;
  }

  NoteList.prototype = {
    notes: function() {
      return this._notes;
    },
    createNote: function(text) {
      this._notes.push(new this._note(text));
    }
  }

  exports.NoteList = NoteList;
})(this);
