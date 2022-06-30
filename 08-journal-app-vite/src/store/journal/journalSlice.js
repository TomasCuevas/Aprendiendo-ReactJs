import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
    // active: {
    //   id: 123,
    //   title: '',
    //   body: '',
    //   date: 123456,
    //   imageUrls: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
    // },
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = '';
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
      state.isSaving = false;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: (state, { payload }) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => (note.id === payload.id ? payload : note));
      state.messageSaved = 'Nota actualizada correctamente.';
    },
  },
});

export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote } =
  journalSlice.actions;
