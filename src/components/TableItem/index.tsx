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
                    <div className="capitalize text-[14px] border-[1.5px] rounded-lg border-black bg-white p-2 cursor-pointer transition-all hover:opacity-55 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <h2 className="font-bold text-xl">table 1</h2>
                        <p className="">
                            status: <span className={`${color} w-full`}>{text}</span>
                        </p>
                        <p>capacity: {tableData.tableCapacity}</p>
                    </div>
                    {/* <Button variant="outline">Share</Button> */}
                </DialogTrigger>
                <DialogContent className="sm:max-w-md md:max-w-[650px]">
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
                    <div className="">
                        {tableData.tableStatus === 2 && (
                            <div className="h-3/4 md:h-4/5 overflow-y-scroll pr-4">
                                <OrderItem />
                                <OrderItem />
                                <OrderItem desc />
                                <OrderItem />
                            </div>
                        )}
                    </div>
                    {tableData.tableStatus === 0 && (
                        <DialogFooter>
                            <div className="flex w-full justify-center items-center gap-4">
                                <DialogClose asChild>
                                    <Button type="button" variant="secondary">
                                        Create Order
                                    </Button>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Button type="button" variant="secondary">
                                        Close
                                    </Button>
                                </DialogClose>
                            </div>
                        </DialogFooter>
                    )}
                    {tableData.tableStatus === 2 && (
                        <DialogFooter>
                            <div className="flex w-full justify-center items-center gap-4">
                                <DialogClose asChild>
                                    <Button
                                        className="bg-secondary-cyan hover:bg-primary-cyan outline-none text-white"
                                        type="button"
                                        variant="secondary"
                                    >
                                        <Link className="w-full" href={'/waiter/checkout'}>
                                            Checkout
                                        </Link>
                                    </Button>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Button
                                        className="hover:bg-primary-cyan outline-none hover:text-white"
                                        type="button"
                                        variant="secondary"
                                    >
                                        Close
                                    </Button>
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
