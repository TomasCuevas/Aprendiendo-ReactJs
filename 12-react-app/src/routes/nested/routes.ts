import { lazy, LazyExoticComponent } from 'react';
import { NoLazyLoad } from '../../01-lazyload/pages/NoLazyLoad';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const lazyLayout = lazy(() => import('../../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    to: '/lazyload',
    path: '/lazyload/*',
    component: lazyLayout,
    name: 'Lazy Layout',
  },
  {
    to: '/no-lazy',
    path: '/no-lazy',
    component: NoLazyLoad,
    name: 'No Lazy',
  },
];
