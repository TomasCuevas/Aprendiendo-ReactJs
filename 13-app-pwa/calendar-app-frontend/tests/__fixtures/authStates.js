export const initialState = {
  status: 'checking', // 'authenticated, 'not-authenticated, 'checking'
  user: {},
  errorMessage: undefined,
};

export const authenticatedState = {
  status: 'authenticated', // 'authenticated, 'not-authenticated, 'checking'
  user: {
    _id: 'abc',
    name: 'Pancracio',
  },
  errorMessage: undefined,
};

export const notAuthenticatedState = {
  status: 'not-authenticated',
  user: {},
  errorMessage: undefined,
};
