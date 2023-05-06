import type { SFCWithInstall } from '@ilzf/utils';
import { withInstall } from '@ilzf/utils';

import HelloWord_ from './src/HelloWord.vue';
withInstall(HelloWord_);

export const HelloWord = HelloWord_ as SFCWithInstall<typeof HelloWord_>;
export default HelloWord_;
