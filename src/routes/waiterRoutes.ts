import { HiHome } from 'react-icons/hi';
import { FaMoneyBillWave, FaConciergeBell, FaUser } from 'react-icons/fa';

const waiterRoutes = [
    {
        title: 'Home',
        icon: HiHome,
        path: '/waiter',
    },
    {
        title: 'tables',
        icon: FaConciergeBell,

        path: '/waiter/tables',
    },
    {
        title: 'checkout',
        icon: FaMoneyBillWave,
        path: '/waiter/checkout',
    },
    {
        title: 'user',
        icon: FaUser,
    },
];

export default waiterRoutes;
