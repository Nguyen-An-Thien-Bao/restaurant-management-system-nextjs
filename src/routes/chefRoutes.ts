import { ChefBellIcon, ChefHomeIcon, ChefUserIcon } from '@/asset/icon/chefRouteIcon';

const chefRoutes = [
    {
        title: 'Home',
        Icon: ChefHomeIcon,
        path: '/chef/home',
    },
    {
        title: 'tables',
        Icon: ChefBellIcon,
        path: '/chef/orders',
    },
    {
        title: 'user',
        path: '',
        Icon: ChefUserIcon,
    },
];

export default chefRoutes;
