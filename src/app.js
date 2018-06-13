export class App {
  notes = [];
  noteText = '';

  constructor() {
    if (localStorage.notes !== undefined) {
      this.notes = localStorage.getObj('notes');
    }
  }

  addNote(e) {
    if (e.keyCode === 13) {
      let note = {};
      note.time = new Date().toJSON();
      note.text = this.noteText;
      this.notes.push(note);
      this.updateLocalStorage();
      this.noteText = '';
    }
  }

  minsDiff(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    return Math.round(Math.abs(d2 - d1) / 60000);
  }

  get notesReverse() {
    return this.notes.slice().reverse();
  }

  removeAll() {
    this.notes = [];
    this.updateLocalStorage();
  }

  rewind(evt, note) {
    let delta = evt.ctrlKey ? 300000 : 60000;
    note.time = (new Date(new Date(note.time).getTime() - delta)).toJSON();
    this.updateLocalStorage();
  }

  forwardwind(evt, note) {
    let delta = evt.ctrlKey ? 300000 : 60000;
    note.time = (new Date(new Date(note.time).getTime() + delta)).toJSON();
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setObj('notes', this.notes);
  }
}

Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key));
};
