import ErrorHandlerModule from '../../../build/index';

export default {
  rootDir: __dirname,
  render: {
    resourceHints: false,
  },
  modules: [
    ErrorHandlerModule,
  ],
};
