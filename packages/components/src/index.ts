import type { App } from 'vue';
import { forIn } from 'lodash';
import * as comps from './components';
export * from './components';
export const ILZFComp = {
  install: (app: App): void => {
    forIn(comps, (comp: any) => {
      if (comp.install) {
        comp.install(app);
      }
    });
  },
};
