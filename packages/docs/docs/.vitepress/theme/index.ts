import DefaultTheme from 'vitepress/theme';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import { ILZFComp } from '@ilzf/components';
import '@ilzf/components/dist/style.css';

import { useComponents } from './useComponents';
import './styles/index.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    useComponents(ctx.app);
    ctx.app.use(ILZFComp);
  },
};
