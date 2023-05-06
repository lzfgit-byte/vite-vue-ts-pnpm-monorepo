import type { App } from 'vue';
import { forIn } from 'lodash';
import * as comps from './components';
export * from './components';
export * from './store/globalState';
export * from './utils';
export const PFrontend = {
  install: (app: App): void => {
    forIn(comps, (comp: any, key: string) => {
      if (comp.install) {
        comp.install(app);
      }
    });
  },
};
