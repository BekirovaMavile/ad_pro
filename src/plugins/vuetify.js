import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
    themes: {
      light: {
        primary: colors.teal.lighten2, // #4DB6AC
        secondary: colors.teal.darken2, // #00796B
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
});
