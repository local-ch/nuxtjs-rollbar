import Rollbar, { ExpressErrorHandler } from 'rollbar';
import { Module } from '@nuxt/types';
import { Server } from 'connect';
import Hable from 'hable';

interface Options {
    accessToken: string,
}

const ErrorHandlerModule: Module<Options> = function(moduleOptions: Options) {
  const nuxt: Hable = this.nuxt;

  const rollbar: Rollbar = Rollbar.init({
    accessToken: process.env.ROLLBAR_ACCESS_TOKEN || moduleOptions.accessToken,
    environment: process.env.stage,
    captureUncaught: true,
    captureUnhandledRejections: true,
  });

  const errorHandler: ExpressErrorHandler = rollbar.errorHandler();
  const hook: ((app: Server) => void) = (app: Server) => app.use(errorHandler);

  nuxt.hook('render:errorMiddleware', hook);
};

export default ErrorHandlerModule;
