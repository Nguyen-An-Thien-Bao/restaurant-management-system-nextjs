import Image from 'next/image';
import formatCurrency from '@/utils/currencyFormat';

type dishType = {
    id: string;
    foodName: string;
    price: string;
    description: string;
    categorieId: number;
    image: null;
    status: number;
    createdAt: string;
    updatedAt: string;
    categorieData: {
        categoryName: string;
    };
};

function MenuItem({ dishData }: { dishData: dishType }) {
    return (
        <div className="flex border-b-[1.5px] border-black mb-2">
            <div className="w-[80px] aspect-square relative">
                <Image src={'https://placehold.jp/80x80.png'} alt="" fill />
            </div>
            <div>
                <h2>{dishData.foodName}</h2>
                <span>{formatCurrency(+dishData.price)}</span>
            </div>
        </div>
    );
}

export default MenuItem;
