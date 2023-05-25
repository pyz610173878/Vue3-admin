import { createApp } from 'vue';

import App from './App.vue';
// import router from './router';
import router from './router';
// 全局导入
import 'element-plus/dist/index.css'
import "./styles/main.less"

const app = createApp(App)
app.use(router)
.mount('#app');
