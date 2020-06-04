/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import DashboardAnalyticsView from './views/DashboardAnalytics';
import DashboardDefaultView from './views/DashboardDefault';
import OverviewView from './views/Overview';
import PresentationView from './views/Presentation';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboards/default" />
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login'))
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('views/Register'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/calendar',
        exact: true,
        component: lazy(() => import('views/Calendar'))
      },
      {
        path: '/changelog',
        exact: true,
        component: lazy(() => import('views/Changelog'))
      },
      {
        path: '/chat',
        exact: true,
        component: lazy(() => import('views/Chat'))
      },
      {
        path: '/chat/:id',
        exact: true,
        component: lazy(() => import('views/Chat'))
      },
      {
        path: '/dashboards/analytics',
        exact: true,
        component: DashboardAnalyticsView
      },
      {
        path: '/dashboards/default',
        exact: true,
       // component: DashboardDefaultView
       component: lazy(() => import('views/CustomerManagementList'))
      },
      {
        path: '/invoices/:id',
        exact: true,
        component: lazy(() => import('views/InvoiceDetails'))
      },
      {
        path: '/kanban-board',
        exact: true,
        component: lazy(() => import('views/KanbanBoard'))
      },
      {
        path: '/mail',
        exact: true,
        component: lazy(() => import('views/Mail'))
      },
      {
        path: '/management/customers',
        exact: true,
        component: lazy(() => import('views/CustomerManagementList'))
      },
      {
        path: '/management/customers/:id',
        exact: true,
        component: lazy(() => import('views/CustomerManagementDetails'))
      },
      {
        path: '/management/customers/:id/:tab',
        exact: true,
        component: lazy(() => import('views/CustomerManagementDetails'))
      },
      {
        path: '/management/drivers',
        exact: true,
        component: lazy(() => import('views/DriverManagementList'))
      },
      {
        path: '/management/drivers/:id',
        exact: true,
        component: lazy(() => import('views/DriverManagementDetails'))
      },
      {
        path: '/management/drivers/:id/:tab',
        exact: true,
        component: lazy(() => import('views/DriverManagementDetails'))
      },
      {
        path: '/management/categories',
        exact: true,
        component: lazy(() => import('views/CategoryManagementList'))
      },
      {
        path: '/management/categories/:id',
        exact: true,
        component: lazy(() => import('views/CategoryManagementDetails'))
      },
      {
        path: '/management/categories/:id/:tab',
        exact: true,
        component: lazy(() => import('views/CategoryManagementDetails'))
      },
      {
        path: '/management/substances',
        exact: true,
        component: lazy(() => import('views/SubstanceManagementList'))
      },
      {
        path: '/management/substances/:id',
        exact: true,
        component: lazy(() => import('views/SubstanceManagementDetails'))
      },
      {
        path: '/management/substances/:id/:tab',
        exact: true,
        component: lazy(() => import('views/SubstanceManagementDetails'))
      },
      {
        path: '/management/products',
        exact: true,
        component: lazy(() => import('views/ProductManagementList'))
      },
      {
        path: '/management/products/:id',
        exact: true,
        component: lazy(() => import('views/ProductManagementDetails'))
      },
      {
        path: '/management/products/:id/:tab',
        exact: true,
        component: lazy(() => import('views/ProductManagementDetails'))
      },
      {
        path: '/management/documents',
        exact: true,
        component: lazy(() => import('views/DocumentManagementList'))
      },
      {
        path: '/management/documents/:id',
        exact: true,
        component: lazy(() => import('views/DocumentManagementDetails'))
      },
      {
        path: '/management/documents/:id/:tab',
        exact: true,
        component: lazy(() => import('views/DocumentManagementDetails'))
      },
      {
        path: '/management/washers',
        exact: true,
        component: lazy(() => import('views/WasherManagementList'))
      },
      {
        path: '/management/washers/:id',
        exact: true,
        component: lazy(() => import('views/WasherManagementDetails'))
      },
      {
        path: '/management/washers/:id/:tab',
        exact: true,
        component: lazy(() => import('views/WasherManagementDetails'))
      },
      {
        path: '/management/washersvenue',
        exact: true,
        component: lazy(() => import('views/WasherVenueManagementList'))
      },
      {
        path: '/management/washersvenue/:id',
        exact: true,
        component: lazy(() => import('views/WasherVenueManagementDetails'))
      },
      {
        path: '/management/washersvenue/:id/:tab',
        exact: true,
        component: lazy(() => import('views/WasherVenueManagementDetails'))
      },
      {
        path: '/management/franchises',
        exact: true,
        component: lazy(() => import('views/FranchiseManagementList'))
      },
      {
        path: '/management/franchises/:id',
        exact: true,
        component: lazy(() => import('views/FranchiseManagementDetails'))
      },
      {
        path: '/management/franchises/:id/:tab',
        exact: true,
        component: lazy(() => import('views/FranchiseManagementDetails'))
      },
      {
        path: '/management/services',
        exact: true,
        component: lazy(() => import('views/ServiceManagementList'))
      },
      {
        path: '/management/services/:id',
        exact: true,
        component: lazy(() => import('views/ServiceManagementDetails'))
      },
      {
        path: '/management/services/:id/:tab',
        exact: true,
        component: lazy(() => import('views/ServiceManagementDetails'))
      },
      {
        path: '/management/stores',
        exact: true,
        component: lazy(() => import('views/StoreManagementList'))
      },
      {
        path: '/management/stores/:id',
        exact: true,
        component: lazy(() => import('views/StoreManagementDetails'))
      },
      {
        path: '/management/stores/:id/:tab',
        exact: true,
        component: lazy(() => import('views/StoreManagementDetails'))
      },
      {
        path: '/management/venues',
        exact: true,
        component: lazy(() => import('views/VenueManagementList'))
      },
      /*{
        path: '/management/venues/:id',
        exact: true,
        component: lazy(() => import('views/VenueManagementDetails'))
      },*/
      {
        path: '/management/venues/:id/:idfranchise',
        exact: true,
        component: lazy(() => import('views/VenueManagementDetails'))
      },
      {
        path: '/management/venues/:id/:idfranchise/:tab',
        exact: true,
        component: lazy(() => import('views/VenueManagementDetails'))
      },
      {
        path: '/management/vehicles',
        exact: true,
        component: lazy(() => import('views/VehicleManagementList'))
      },
      {
        path: '/management/vehicles/:id',
        exact: true,
        component: lazy(() => import('views/VehicleManagementDetails'))
      },
      {
        path: '/management/vehicles/:id/:tab',
        exact: true,
        component: lazy(() => import('views/VehicleManagementDetails'))
      },
      {
        path: '/management/requests',
        exact: true,
        component: lazy(() => import('views/RequestManagementList'))
      },
      {
        path: '/management/requests/:id',
        exact: true,
        component: lazy(() => import('views/RequestManagementDetails'))
      },
      {
        path: '/management/requests/:id/:tab',
        exact: true,
        component: lazy(() => import('views/RequestManagementDetails'))
      },
      {
        path: '/management/coupons',
        exact: true,
        component: lazy(() => import('views/CouponManagementList'))
      },
      {
        path: '/management/coupons/:id',
        exact: true,
        component: lazy(() => import('views/CouponManagementDetails'))
      },
      {
        path: '/management/coupons/:id/:tab',
        exact: true,
        component: lazy(() => import('views/CouponManagementDetails'))
      },
      {
        path: '/management/owners',
        exact: true,
        component: lazy(() => import('views/OwnerManagementList'))
      },
      {
        path: '/management/owners/:id',
        exact: true,
        component: lazy(() => import('views/OwnerManagementDetails'))
      },
      {
        path: '/management/owners/:id/:tab',
        exact: true,
        component: lazy(() => import('views/OwnerManagementDetails'))
      },
      ,
      {
        path: '/management/rates',
        exact: true,
        component: lazy(() => import('views/RateManagementDetails'))
      },
      {
        path: '/management/rates/:id',
        exact: true,
        component: lazy(() => import('views/RateManagementDetails'))
      },
      {
        path: '/management/rates/:id/:tab',
        exact: true,
        component: lazy(() => import('views/RateManagementDetails'))
      },
      {
        path: '/management/projects',
        exact: true,
        component: lazy(() => import('views/ProjectManagementList'))
      },
      {
        path: '/management/template',
        exact: true,
        component: lazy(() => import('views/TemplateManagement'))
      },
      {
        path: '/management/orders',
        exact: true,
        component: lazy(() => import('views/OrderManagementList'))
      },
      {
        path: '/management/orders/:id',
        exact: true,
        component: lazy(() => import('views/OrderManagementDetails'))
      },
      {
        path: '/management/orders/:id/:tab',
        exact: true,
        component: lazy(() => import('views/OrderManagementDetails'))
      },
      {
        path: '/overview',
        exact: true,
        component: OverviewView
      },
      {
        path: '/presentation',
        exact: true,
        component: PresentationView
      },
      {
        path: '/profile/:id',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/profile/:id/:tab',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/projects/create',
        exact: true,
        component: lazy(() => import('views/ProjectCreate'))
      },
      {
        path: '/projects/:id',
        exact: true,
        component: lazy(() => import('views/FranchiseDetails'))
      },
      {
        path: '/projects/:id/:tab',
        exact: true,
        component: lazy(() => import('views/FranchiseDetails'))
      },
      {
        path: '/projects',
        exact: true,
        component: lazy(() => import('views/ProjectList'))
      },
      {
        path: '/settings',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        path: '/settings/:tab',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        path: '/social-feed',
        exact: true,
        component: lazy(() => import('views/SocialFeed'))
      },
      {
        path: '/getting-started',
        exact: true,
        component: lazy(() => import('views/GettingStarted'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
