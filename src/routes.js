/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import DashboardAnalyticsView from './views/DashboardAnalytics';
import DashboardKitchensView from './views/DashboardKitchen';
import KitchenNuevosPedidos from './views/KitchenNuevosPedidos';
import KitchenEnCocina from './views/KitchenEnCocina';
import KitchenProgramados from './views/KitchenProgramados';
import KitchenEntrega from './views/KitchenEntrega';
import KitchenHistorial from './views/KitchenHistorial';
import KitchenProductos from './views/KitchenProductos';
import DashboardDefaultView from './views/DashboardDefault';
import OverviewView from './views/Overview';
import PresentationView from './views/Presentation';

const routes = [
  {
    path: '/',
    exact: true,
   // component: () => <Redirect to="/overview" />
     component: () => <Redirect to="/dashboards/nuevos" />
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
      // {
      //   path: '/dashboards/analytics',
      //   exact: true,
      //   component: DashboardAnalyticsView
      // },
      {
        path: '/dashboards/kitchen',
        exact: true,
        component: DashboardKitchensView
      },
      {
        path: '/dashboards/nuevos',
        exact: true,
        component: KitchenNuevosPedidos
      },
      {
        path: '/dashboards/encocina',
        exact: true,
        component: KitchenEnCocina
      },
      {
        path: '/dashboards/programados',
        exact: true,
        component: KitchenProgramados
      },
      {
        path: '/dashboards/entrega',
        exact: true,
        component: KitchenEntrega
      },
      {
        path: '/dashboards/historial',
        exact: true,
        component: KitchenHistorial
      },
      {
        path: '/dashboards/productos',
        exact: true,
        component: KitchenProductos
      },
      {
        path: '/dashboards/default',
        exact: true,
        // component: DashboardDefaultView
        component: lazy(() => import('views/CustomerManagementList'))
      },
      {
        path: '/dashboards/default2',
        exact: true,
        component: DashboardDefaultView
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
        path: '/management/restaurants',
        exact: true,
        component: lazy(() => import('views/RestaurantManagementList'))
      },
      {
        path: '/management/restaurants/:id',
        exact: true,
        component: lazy(() => import('views/RestaurantManagementDetails'))
      },
      {
        path: '/management/restaurants/:id/:tab',
        exact: true,
        component: lazy(() => import('views/RestaurantManagementDetails'))
      },
      {
        path: '/management/administrators',
        exact: true,
        component: lazy(() => import('views/AdministratorManagementList'))
      },
      {
        path: '/management/administrators/:id',
        exact: true,
        component: lazy(() => import('views/AdministratorManagementDetails'))
      },
      {
        path: '/management/administrators/:id/:tab',
        exact: true,
        component: lazy(() => import('views/AdministratorManagementDetails'))
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
        path: '/management/kinds',
        exact: true,
        component: lazy(() => import('views/KindManagementList'))
      },
      {
        path: '/management/kinds/:id/:idrestaurant',
        exact: true,
        component: lazy(() => import('views/KindManagementDetails'))
      },
      {
        path: '/management/kinds/:id/:idrestaurant/:tab',
        exact: true,
        component: lazy(() => import('views/KindManagementDetails'))
      },
      {
        path: '/management/ingredients',
        exact: true,
        component: lazy(() => import('views/IngredientManagementList'))
      },
      {
        path: '/management/ingredients/:id',
        exact: true,
        component: lazy(() => import('views/IngredientManagementDetails'))
      },
      {
        path: '/management/ingredients/:id/:tab',
        exact: true,
        component: lazy(() => import('views/IngredientManagementDetails'))
      },
      {
        path: '/management/companies',
        exact: true,
        component: lazy(() => import('views/CompanyManagementList'))
      },
      {
        path: '/management/companies/:id',
        exact: true,
        component: lazy(() => import('views/CompanyManagementDetails'))
      },
      {
        path: '/management/companies/:id/:tab',
        exact: true,
        component: lazy(() => import('views/CompanyManagementDetails'))
      },
      {
        path: '/management/products',
        exact: true,
        component: lazy(() => import('views/ProductManagementList'))
      },
      {
        path: '/management/products/:id/:idrestaurant',
        exact: true,
        component: lazy(() => import('views/ProductManagementDetails'))
      },
      {
        path: '/management/products/:id/:idrestaurant/:tab',
        exact: true,
        component: lazy(() => import('views/ProductManagementDetails'))
      },
      {
        path: '/management/kitchens',
        exact: true,
        component: lazy(() => import('views/KitchenManagementList'))
      },
      {
        path: '/management/kitchens/:id/:idrestaurant',
        exact: true,
        component: lazy(() => import('views/KitchenManagementDetails'))
      },
      {
        path: '/management/kitchens/:id/:idrestaurant/:tab',
        exact: true,
        component: lazy(() => import('views/KitchenManagementDetails'))
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
        path: '/management/employees',
        exact: true,
        component: lazy(() => import('views/EmployeeManagementList'))
      },
      {
        path: '/management/employees/:id',
        exact: true,
        component: lazy(() => import('views/EmployeeManagementDetails'))
      },
      {
        path: '/management/employees/:id/:tab',
        exact: true,
        component: lazy(() => import('views/EmployeeManagementDetails'))
      },
      {
        path: '/management/centers',
        exact: true,
        component: lazy(() => import('views/CenterManagementList'))
      },
      {
        path: '/management/centers/:id',
        exact: true,
        component: lazy(() => import('views/CenterManagementDetails'))
      },
      {
        path: '/management/centers/:id/:tab',
        exact: true,
        component: lazy(() => import('views/CenterManagementDetails'))
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
        path: '/management/claims',
        exact: true,
        component: lazy(() => import('views/ClaimManagementList'))
      },
      {
        path: '/management/claims/:id',
        exact: true,
        component: lazy(() => import('views/ClaimManagementDetails'))
      },
      {
        path: '/management/claims/:id/:tab',
        exact: true,
        component: lazy(() => import('views/ClaimManagementDetails'))
      },
      {
    path: '/management/promotions',
    exact: true,
    component: lazy(() => import('views/PromotionManagementList'))
  },
  {
    path: '/management/promotions/:id',
    exact: true,
    component: lazy(() => import('views/PromotionManagementDetails'))
  },
  {
    path: '/management/promotions/:id/:tab',
    exact: true,
    component: lazy(() => import('views/PromotionManagementDetails'))
  },
      // {
      //   path: '/projects/:id',
      //   exact: true,
      //   component: lazy(() => import('views/CenterDetails'))
      // },
      // {
      //   path: '/projects/:id/:tab',
      //   exact: true,
      //   component: lazy(() => import('views/CenterDetails'))
      // },
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
