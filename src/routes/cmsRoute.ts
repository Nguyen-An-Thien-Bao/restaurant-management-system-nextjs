import { CmsHomeIcon, CmsChartIcon, CmsUserIcon, CmsHamburgerIcon, CmsHistoryIcon } from '@/asset/icon/cmsRouteIcon';

const cmsRoutes = [
    {
        title: 'dashboard',
        path: '/dashboard',
        Icon: CmsHomeIcon,
    },
    {
        title: 'analyst',
        path: '/analyst',
        Icon: CmsChartIcon,
    },
    {
        title: 'menu',
        path: '/menu',
        Icon: CmsHamburgerIcon,
    },
    {
        title: 'histoty',
        path: '/history',
        Icon: CmsHistoryIcon,
    },
    {
        title: 'staffs',
        path: '/staffs',
        Icon: CmsUserIcon,
    },
];

export default cmsRoutes;
