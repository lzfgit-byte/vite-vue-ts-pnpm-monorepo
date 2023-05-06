import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn'; // element中文
import App from '@/App.vue';
import 'element-plus/dist/index.css';
import { PFrontend } from '@/index';

const app = createApp(App);
app.use(ElementPlus, { locale }).use(PFrontend).mount('#app');
