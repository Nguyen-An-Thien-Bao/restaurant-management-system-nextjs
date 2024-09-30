import React from 'react';
import Image from 'next/image';
import formatCurrency from '@/utils/currencyFormat';

function MenuItem({
    data,
}: {
    data: {
        dishName: string;
        dishIngredients: string;
        dishPrice: number;
        dishImages: string;
    };
}): React.ReactNode {
    return (
        <div className="p-2 flex w-full overflow-hidden border border-transparent rounded-lg">
            <div className="relative h-full aspect-square bg-cyan-500 flex-shrink-0 border rounded-lg overflow-hidden cursor-pointer">
                <Image
                    fill
                    className="w-full h-full object-cover border rounded-lg hover:scale-125 cur transition-all"
                    src={data.dishImages}
                    alt=""
                />
            </div>
            <div className="px-4 ">
                <h3 className="font-bold">{data.dishName}</h3>
                <p className="line-clamp-3 my-1 select-none">Ingredients: {data.dishIngredients}</p>
                <span className="select-none">Price: {formatCurrency(data.dishPrice)}</span>
            </div>
        </div>
    );
}

export default MenuItem;
