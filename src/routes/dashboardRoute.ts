import { FaHome, FaChartBar, FaHistory, FaHamburger, FaUsers } from 'react-icons/fa';

const dashboardRoutes = [
    {
        title: 'dashboard',
        path: '/dashboard',
        Icon: FaHome,
    },
    {
        title: 'analyst',
        path: '/analyst',
        Icon: FaChartBar,
    },
    {
        title: 'products',
        path: '/products',
        Icon: FaHamburger,
    },
    {
        title: 'histoty',
        path: '/history',
        Icon: FaHistory,
    },
    {
        title: 'staffs',
        path: '/staffs',
        Icon: FaUsers,
    },
];

export default dashboardRoutes;
