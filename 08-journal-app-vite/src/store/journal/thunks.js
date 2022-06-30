import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} from './journalSlice';
import { loadNotes } from '../../journal/helpers/loadNotes';
import { fileUpload } from '../../journal/helpers/fileUpload';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;

    const newNote = {
      title: 'Primera Nota',
      body: 'Cuerpo de la nota',
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;
    if (!uid) throw new Error('El uid del usuario no existe.');

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startUpdateNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    for (const element in noteToFirestore) {
      if (noteToFirestore[element] === undefined) noteToFirestore[element] = '';
    }

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true });

    dispatch(updateNote(note));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());
    const response = await fileUpload(files[0]);
    console.log(response);
  };
};
