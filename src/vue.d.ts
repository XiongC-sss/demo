import Vue from 'vue'
import { AxiosInstance } from "axios";
import { Message } from "element-ui";
import { VueRouter } from "vue-router/types/router";

declare module '*.vue' {
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
    $route: VueRouter;
    $message: Message
  }
}
