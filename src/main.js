import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Button,Container,Header,Aside,Main,Menu,Submenu,MenuItem,MenuItemGroup,Table,TableColumn,Pagination,Form,
  FormItem,Input, Message,Upload,Row,Col} from 'element-ui';

Vue.prototype.$axios=axios //设置全局变量

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Upload);
Vue.use(Row);
Vue.use(Col);
Vue.use(Message);
Vue.prototype.$message = Message;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
