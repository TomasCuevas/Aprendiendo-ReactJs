import 'whatwg-fetch';
import 'setimmediate';

require('dotenv').config({
  path: '.env.test',
});

// eslint-disable-next-line no-undef
jest.mock('./src/helpers', () => ({
  getEnvironments: () => ({ ...process.env }),
}));
