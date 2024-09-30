import { HiHome } from 'react-icons/hi';
import { FaConciergeBell, FaUser } from 'react-icons/fa';

const chefRoutes = [
    {
        title: 'Home',
        icon: HiHome,
        path: '/chef',
    },
    {
        title: 'tables',
        icon: FaConciergeBell,
        path: '/chef/orders',
    },
    {
        title: 'user',
        icon: FaUser,
    },
];

export default chefRoutes;
