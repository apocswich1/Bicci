/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

import { Label } from 'components';

export default [
  {
    title: 'Pages',
    pages: [
      {
        title: 'General',
        href: '/overview',
        icon: HomeIcon
      },
      // {
      //   title: 'Tablero',
      //   href: '/dashboards',
      //   icon: DashboardIcon,
      //   children: [
      //     {
      //       title: 'Inicio',
      //       href: '/dashboards/default'
      //     },
      //   /*  {
      //       title: 'Analytics',
      //       href: '/dashboards/analytics'
      //     }*/
      //   ]
      // },
      // {
      //   title: 'Administración',
      //   href: '/management',
      //   icon: BarChartIcon,
      //   children: [
      //     {
      //       title: 'Usuarios',
      //       href: '/management/customers'
      //     },
      //     {
      //       title: 'Prowashers',
      //       href: '/management/washers'
      //     },
      //     {
      //       title: 'Franquicias',
      //       href: '/management/franchises'
      //     },
      //     {
      //       title: 'Servicios',
      //       href: '/management/services'
      //     },
      //     {
      //       title: 'Ordenes',
      //       href: '/management/orders'
      //     },
      //     {
      //       title: 'Cupones',
      //       href: '/management/coupons'
      //     },
      //   ]
      // },
      {
        title: 'Usuarios',
        href: '/management/customers',
        icon: PersonIcon,
      },
      {
        title: 'Prowashers',
        href: '/management/washers',
        icon: PeopleIcon,
      },
      {
        title: 'Franquicias',
        href: '/management/franchises',
        icon: StoreMallDirectoryIcon,
      },
      /*{
        title: 'Sucursales',
        href: '/management/venues'
      },*/
      {
        title: 'Servicios',
        href: '/management/services',
        icon: LocalCarWashIcon,
      },
      // {
      //   title: 'Washers Venue',
      //   href: '/management/washersvenue'
      // },
      // {
      //   title: 'Template',
      //   href: '/management/template'
      // },
      {
        title: 'Ordenes',
        href: '/management/orders',
        icon: ListAltIcon,
      },
   /*   {
        title: 'Requests',
        href: '/management/requests'
      },
      {
        title: 'Owners',
        href: '/management/owners'
      },
      {
        title: 'Prices',
        href: '/management/rates/1/summary'
      },*/
      {
        title: 'Cupones',
        href: '/management/coupons',
        icon: ConfirmationNumberIcon,
      }
      /*{
        title: 'Authentication',
        href: '/auth',
        icon: LockOpenIcon,
        children: [
          {
            title: 'Login',
            href: '/auth/login'
          },
          {
            title: 'Register',
            href: '/auth/register'
          }
        ]
      },*/
      /*{
        title: 'Errors',
        href: '/errors',
        icon: ErrorIcon,
        children: [
          {
            title: 'Error 401',
            href: '/errors/error-401'
          },
          {
            title: 'Error 404',
            href: '/errors/error-404'
          },
          {
            title: 'Error 500',
            href: '/errors/error-500'
          }
        ]
      }*/
    ]
  },
  /*{
    title: 'Support',
    pages: [
      {
        title: 'Presentation',
        href: '/presentation',
        icon: PresentToAllIcon
      },
      {
        title: 'Getting started',
        href: '/getting-started',
        icon: CodeIcon
      },
      {
        title: 'Changelog',
        href: '/changelog',
        icon: ViewModuleIcon,
        label: () => <Label color={colors.blue['500']}>v1.2.0</Label>
      }
    ]
  }*/
];
