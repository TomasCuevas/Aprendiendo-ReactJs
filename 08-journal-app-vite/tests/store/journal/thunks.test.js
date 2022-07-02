/* eslint-disable no-undef */
import { startNewNote } from '../../../src/store/journal/thunks';

describe('Pruebas en journal thunks', () => {
  jest.setTimeout(15000);

  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('startNewNote debe de crear una nota en blacno', async () => {
    const uid = 'TEST-UID';
    getState.mockReturnValue({ auth: { uid } });

    await startNewNote()(dispatch, getState);
  });
});
