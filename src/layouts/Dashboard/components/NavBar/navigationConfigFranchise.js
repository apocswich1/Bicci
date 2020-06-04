/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';




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
      //   title: 'Usuarios',
      //   href: '/management/customers',
      //   icon: PersonIcon,
      // },
      {
        title: 'Prowashers',
        href: '/management/washers',
        icon: PeopleIcon,
      },
      {
        title: 'Franchise',
        href: '/management/franchises',
        icon: StoreMallDirectoryIcon,
      },
      // {
      //   title: 'Servicios',
      //   href: '/management/services',
      //   icon: LocalCarWashIcon,
      // },
      {
        title: 'Ordenes',
        href: '/management/orders',
        icon: ListAltIcon,
      },   
      // {
      //   title: 'Cupones',
      //   href: '/management/coupons',
      //   icon: ConfirmationNumberIcon,
      // }
    ]
  },
];
