// Don't remove this file, because it registers the demo components.
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
import ButtonDemo from '../components/button/demo.vue';
import InputDemo from '../components/input/demo.vue';

// 组件实例代码在此处注册
export function useComponents(app) {
  app.component('ButtonDemo', ButtonDemo);
  app.component('InputDemo', InputDemo);
  app.component('Demo', Demo);
  app.component('DemoBlock', DemoBlock);
}
