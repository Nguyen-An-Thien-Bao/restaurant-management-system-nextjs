import ChefOrderItem from '@/components/ChefOrderItem';
import { ReactNode } from 'react';

const sample = [
    {
        id: 3,
        tableID: 2,
        accountID: 2,
        total_price: '1200000.00',
        status: 0,
        notes: 'đã đem hết món',
        payment: 'other',
        createdAt: '2024-10-02T09:20:49.000Z',
        updatedAt: '2024-10-02T09:20:49.000Z',
        tableData: {
            id: 2,
        },
        accountData: {
            username: 'Dũng',
            role: 'Server',
        },
    },
    {
        id: 4,
        tableID: 8,
        accountID: 1,
        total_price: '200000.00',
        status: 1,
        notes: 'còn món',
        payment: 'other',
        createdAt: '2024-10-02T09:20:49.000Z',
        updatedAt: '2024-10-02T09:20:49.000Z',
        tableData: {
            id: 2,
        },
        accountData: {
            username: 'Dũng',
            role: 'Server',
        },
    },
];

function ChefOrders(): ReactNode {
    return (
        <div>
            <ChefOrderItem data={sample[0]} />
        </div>
    );
}

export default ChefOrders;
