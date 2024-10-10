import formatCurrency from '@/utils/currencyFormat';

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
import { Button } from '@/components/ui/button';

type cellType = {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    status: number;
    createAt: string;
    updateAt: string;
};

function TableCell({ cellData }: { cellData: cellType }) {
    return (
        <tr className="bg-white border-separate hover:bg-[#ccc] transition-all cursor-pointer">
            {(Object.keys(cellData) as (keyof cellType)[]).map((key, idx) => {
                let text = cellData[key];
                if (key === 'price') {
                    text = formatCurrency(cellData[key]);
                } else if (key === 'status') {
                    switch (cellData[key]) {
                        case 0:
                            text = 'Still Available';
                            break;
                        case 1:
                            text = 'Sold Out';
                            break;
                    }
                }

                return (
                    <td
                        className="border-x pl-2 border-black pr-[8px] first:border-l-0 capitalize last:border-r-0 py-2 text-lg"
                        key={idx}
                    >
                        {key !== 'image' ? (
                            text
                        ) : (
                            <Dialog>
                                <div className="cursor-pointer w-full overflow-hidden">
                                    <DialogTrigger asChild>
                                        <img
                                            src={`${cellData[key]}`}
                                            alt=""
                                            className="w-full aspect-square hover:rotate-90 hover:scale-125 transition-all"
                                        />
                                    </DialogTrigger>
                                </div>
                                <DialogContent className="w-[calc(100%-50px)] max-h-[calc(100%-50px)] rounded-lg md:max-w-[560px]">
                                    <DialogHeader>
                                        <DialogTitle className="capitalize">{cellData['name']}</DialogTitle>
                                    </DialogHeader>
                                    <div>
                                        <img src={`${cellData[key]}`} alt="" className="w-full aspect-square" />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        )}
                    </td>
                );
            })}
        </tr>
    );
}

export default TableCell;
