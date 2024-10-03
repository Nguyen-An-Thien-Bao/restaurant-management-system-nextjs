import CheckoutItem from '@/components/CheckoutItem';
import Header from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Checkout',
    description: 'Generated by create next app',
};

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
        tableID: 3,
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

function WaiterCheckout() {
    return (
        <div>
            <Header />
            <div className="px-4 gap-2 pb-[80px] gap-y-6 lg:py-[40px] grid grid-cols-1 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:grid-cols-3 lg:px-8 mt-8 lg:mt-0">
                {sample.map((ele) => (
                    <CheckoutItem key={ele.id} data={ele} />
                ))}
            </div>
        </div>
    );
}

export default WaiterCheckout;
