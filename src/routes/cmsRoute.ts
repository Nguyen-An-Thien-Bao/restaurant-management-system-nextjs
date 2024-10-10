import {
    CmsHomeIcon,
    CmsChartIcon,
    CmsUserIcon,
    CmsBurger,
    CmsHistoryIcon,
    CmsBellIcon,
} from '@/asset/icon/cmsRouteIcon';

const cmsRoutes = [
    {
        title: 'dashboard',
        path: '/admin/dashboard',
        Icon: CmsHomeIcon,
    },
    {
        title: 'analyst',
        path: '/admin/analyst',
        Icon: CmsChartIcon,
    },
    {
        title: 'reservation',
        path: '/admin/reservation',
        Icon: CmsBellIcon,
    },
    {
        title: 'menu',
        path: '/admin/menu',
        Icon: CmsBurger,
    },
    {
        title: 'histoty',
        path: '/admin/history',
        Icon: CmsHistoryIcon,
    },
    {
        title: 'staffs',
        path: '/admin/staffs',
        Icon: CmsUserIcon,
    },
];

export default cmsRoutes;
