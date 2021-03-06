import { RouteConfig } from 'vue-router';

const projectListRoute: RouteConfig = {
  path: '/',
  name: 'ProjectList',
  component: () => import('./ProjectList.vue'),
  meta: {
    requireAuthentication: true,
    title: 'Project list',
    noCache: true
  }
};

export default projectListRoute;
