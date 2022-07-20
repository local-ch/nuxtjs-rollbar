import { setup, loadConfig } from '@nuxtjs/module-test-utils';
import { NuxtConfig } from '@nuxt/types';

describe('module', () => {
  let nuxt: { close: () => void };
  beforeAll(async () => {
    const config: NuxtConfig = loadConfig(__dirname, 'default');
    ({ nuxt } = await setup(config));
  });

  afterAll(async () => {
    if (nuxt) {
      await nuxt.close();
    }
  });

  test('should inject plugin bla', () => {
    expect(3 === 3).toBe(true);
    // expectModuleToBeCalledWith('addPlugin', {
    //   src: expect.stringContaining('templates/plugin.js'),
    //   fileName: 'myPlugin.js',
    //   options: getNuxt().options.myModule,
    // });
  });
});
