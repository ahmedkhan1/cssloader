import Vue from 'vue'
import VuejsClipper  from "vuejs-clipper/dist/vuejs-clipper.umd";
import { clipperFixed, clipperUpload } from "vuejs-clipper/dist/vuejs-clipper.umd";

import "vuejs-clipper/dist/vuejs-clipper.css";
import VueRx from 'vue-rx'


Vue.use(VueRx)
Vue.use(VuejsClipper)
Vue.use(clipperFixed)
Vue.use(clipperUpload)
