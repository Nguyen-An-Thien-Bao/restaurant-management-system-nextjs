import React from 'react';
import formatCurrency from '@/utils/currencyFormat';

function ChefOrderItem({
    data,
}: {
    data: {
        id: number;
        tableID: number;
        accountID: number;
        total_price: string;
        status: number;
        notes: string;
        payment: string;
        createdAt: string;
        updatedAt: string;
        tableData: {
            id: number;
        };
        accountData: {
            username: string;
            role: string;
        };
    };
}): React.ReactNode {
    let color;
    let text;

    switch (data.status) {
        case 0:
            color = 'text-[#2ABE1D]';
            text = 'done';
            break;
        case 1:
            color = 'text-[#C2B200]';
            text = 'in process';
            break;
        case 2:
            color = 'text-[#2C2C2C]';
            text = 'pending';
            break;
    }
    return (
        <div className="flex select-none items-center pb-3 border-b-[1.5px] border-black cursor-pointer">
            <div className="w-[60px] aspect-square rounded-lg bg-secondary-gray flex justify-center items-center">
                <span className="text-center text-theme-primary font-semibold text-xl">{data.tableID}</span>
            </div>
            <div className="pl-4 w-full flex justify-between items-center">
                <div className="flex flex-col justify-between">
                    <h3 className="text-lg font-medium capitalize">
                        Table: <span>{data.tableID}</span>
                    </h3>
                    <span className="capitalize">total: {formatCurrency(+data.total_price)}</span>
                </div>
                <p className="capitalize py-1 px-5 text-sm border border-[#2C2C2C] rounded-lg bg-[#2C2C2C]">
                    <span className={`${color}`}>{text}</span>
                </p>
            </div>
        </div>
    );
}

export default ChefOrderItem;
