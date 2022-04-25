import Vue from 'vue'

//VueTippy
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/translucent.css";

import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy, {
    directive: "tippy", // => v-tippy
    flipDuration: 0,
    popperOptions: {
      modifiers: {
        preventOverflow: {
          enabled: false
        }
      }
    },
    zIndex: 10999,
  });
Vue.component("tippy", TippyComponent);