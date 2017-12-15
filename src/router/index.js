import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '../page/index.vue';
import DetailPage from '../page/detail.vue';
import analysis from '../page/detail/analysis.vue';
import count from '../page/detail/count.vue';
import forecast from '../page/detail/forecast.vue';
import publish from '../page/detail/publish.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'analysis',
          name: 'analysis',
          component: analysis
        },
        {
          path: 'count',
          name: 'count',
          component: count
        },
        {
          path: 'forecast',
          name: 'forecast',
          component: forecast
        },
        {
          path: 'publish',
          name: 'publish',
          component: publish
        }
      ]
    }
  ]
});
