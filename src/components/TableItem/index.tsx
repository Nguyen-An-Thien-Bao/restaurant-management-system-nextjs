import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import OrderItem from '../OrderItem';

enum status {
    empty,
    reservation,
    serve,
}

// type TableType = { id: number; seating_capacity: number; status: status; created_at: Date; updated_at: Date };

// { data }: { data: TableType }
function TableItem({
    tableData,
}: {
    tableData: {
        id: string;
        tableNumber: number;
        tableStatus: number;
        tableCapacity: number;
    };
}) {
    let color;
    let text;

    switch (tableData.tableStatus) {
        case 0:
            color = 'text-[#2ABE1D]';
            text = 'availabity';
            break;
        case 1:
            color = 'text-[#C2B200]';
            text = 'in reservation';
            break;
        case 2:
            color = 'text-[#FF0000]';
            text = 'in serve';
            break;
    }
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="capitalize select-none text-[14px] border-[1.5px] rounded-lg border-black bg-white p-2 cursor-pointer transition-all hover:opacity-55 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <h2 className="font-bold text-xl">table {tableData.tableNumber}</h2>
                        <p className="">
                            status: <span className={`${color} w-full`}>{text}</span>
                        </p>
                        <p>capacity: {tableData.tableCapacity}</p>
                    </div>
                </DialogTrigger>
                <DialogContent className="w-[calc(100%-50px)] max-h-[calc(100%-50px)] rounded-lg md:max-w-[560px] flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Notice</DialogTitle>
                        {tableData.tableStatus === 0 && (
                            <DialogDescription>This table is in availabity.</DialogDescription>
                        )}
                        {tableData.tableStatus === 1 && (
                            <DialogDescription>This table is in reservation.</DialogDescription>
                        )}
                        {tableData.tableStatus === 2 && <DialogDescription>This table is in serve.</DialogDescription>}
                    </DialogHeader>
                    {tableData.tableStatus === 2 && (
                        <div className="h-full overflow-y-scroll relative">
                            <div className="pr-4">
                                <OrderItem />
                                <OrderItem />
                                <OrderItem desc />
                                <OrderItem />
                                <OrderItem />
                                <OrderItem />
                            </div>
                        </div>
                    )}

                    {tableData.tableStatus === 0 && (
                        <DialogFooter className="h-12">
                            <div className="flex w-full justify-center items-center gap-4">
                                <DialogClose asChild>
                                    <Link
                                        href={`/waiter/tables/${tableData.id}`}
                                        className="py-2 rounded-lg px-4 bg-secondary-cyan hover:bg-primary-cyan outline-none text-white"
                                    >
                                        Create Order
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <button
                                        type="button"
                                        className="py-2 rounded-lg px-4 bg-secondary-cyan hover:bg-primary-cyan outline-none text-white"
                                    >
                                        Close
                                    </button>
                                </DialogClose>
                            </div>
                        </DialogFooter>
                    )}
                    {tableData.tableStatus === 2 && (
                        <DialogFooter className="h-12">
                            <div className="flex w-full justify-center items-center gap-x-4">
                                <DialogClose asChild>
                                    <Link
                                        className="py-2 rounded-lg px-4 bg-secondary-cyan hover:bg-primary-cyan outline-none text-white"
                                        href={`/waiter/checkout/${tableData.id}`}
                                    >
                                        Checkout
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <button className="py-2 rounded-lg px-4 bg-secondary-cyan hover:bg-primary-cyan outline-none text-white">
                                        Close
                                    </button>
                                </DialogClose>
                            </div>
                        </DialogFooter>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}

export default TableItem;
