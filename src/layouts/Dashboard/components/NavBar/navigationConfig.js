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
import BookIcon from '@material-ui/icons/BookOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlotOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

import { Label } from 'components';
import translate from 'translate';

export default [
  {
    title: translate("Pages"),
    pages: [
      {
        title: 'General',
        href: '/overview',
        icon: HomeIcon
      },
      {
        title: translate('Usuarios'),
        href: '/management/customers',
        icon: PersonIcon,
      },
      {
        title: translate('Conductores'),
        href: '/management/drivers',
        icon: PersonIcon,
      },
      // {
      //   title: translate('Categorías'),
      //   href: '/management/categories',
      //   icon: BookIcon,
      // },
      // {
      //   title: translate('Productos'),
      //   href: '/management/products',
      //   icon: ListAltIcon,
      // },
      // {
      //   title: translate('Moléculas'),
      //   href: '/management/substances',
      //   icon: ScatterPlotIcon,
      // },
      // {
      //   title: translate('Documentos'),
      //   href: '/management/documents',
      //   icon: DescriptionIcon,
      // },
      // {
      //   title: translate('Store')+'s',
      //   href: '/management/stores',
      //   icon: StoreMallDirectoryIcon,
      // },
      {
        title: 'Notificaciones',
        href: '/projects/create',
        icon: NotificationsOutlinedIcon,
      }
      // {
      //   title: 'Servicios',
      //   href: '/management/services',
      //   icon: LocalCarWashIcon,
      // },
      // {
      //   title: 'Ordenes',
      //   href: '/management/orders',
      //   icon: ListAltIcon,
      // },   
      // {
      //   title: 'Cupones',
      //   href: '/management/coupons',
      //   icon: ConfirmationNumberIcon,
      // }
    ]
  },
];
