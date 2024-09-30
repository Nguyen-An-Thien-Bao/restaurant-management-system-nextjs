import React from 'react';
import MenuItem from './MenuItem';

const mockData = [
    {
        dishName: 'Pizza Napoletana',
        dishIngredients:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam turpis ut semper accumsan. Nam dapibus sodales dolor sed eleifend. Vestibulum viverra sapien velit, volutpat interdum enim imperdiet sed. Donec facilisis porttitor nisi, non sodales felis efficitur ac. In hac habitasse platea dictumst. Ut elementum nunc vitae vestibulum lacinia.',
        dishPrice: 120000,
        dishImages:
            'https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/pizza-napoletana-1643401533.webp',
    },
    {
        dishName: 'Polenta',
        dishIngredients:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam turpis ut semper accumsan. Nam dapibus sodales dolor sed eleifend. Vestibulum viverra sapien velit, volutpat interdum enim imperdiet sed. Donec facilisis porttitor nisi, non sodales felis efficitur ac. In hac habitasse platea dictumst. Ut elementum nunc vitae vestibulum lacinia.',
        dishPrice: 70000,
        dishImages:
            'https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/polenta-1643401533.webp',
    },
    {
        dishName: 'Ribollita',
        dishIngredients:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam turpis ut semper accumsan. Nam dapibus sodales dolor sed eleifend. Vestibulum viverra sapien velit, volutpat interdum enim imperdiet sed. Donec facilisis porttitor nisi, non sodales felis efficitur ac. In hac habitasse platea dictumst. Ut elementum nunc vitae vestibulum lacinia.',
        dishPrice: 150000,
        dishImages:
            'https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/ribollita-1643401533.webp',
    },
    {
        dishName: 'Risotto alla Milanese',
        dishIngredients:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam turpis ut semper accumsan. Nam dapibus sodales dolor sed eleifend. Vestibulum viverra sapien velit, volutpat interdum enim imperdiet sed. Donec facilisis porttitor nisi, non sodales felis efficitur ac. In hac habitasse platea dictumst. Ut elementum nunc vitae vestibulum lacinia.',
        dishPrice: 120000,
        dishImages:
            'https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/risotto-alla-milanese-1643401533.webp',
    },
    {
        dishName: 'Cotoletta alla Milanese',
        dishIngredients:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam turpis ut semper accumsan. Nam dapibus sodales dolor sed eleifend. Vestibulum viverra sapien velit, volutpat interdum enim imperdiet sed. Donec facilisis porttitor nisi, non sodales felis efficitur ac. In hac habitasse platea dictumst. Ut elementum nunc vitae vestibulum lacinia.',
        dishPrice: 100000,
        dishImages:
            'https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/cotoletta-alla-milanese-1643401533.webp',
    },
    {
        dishName: 'Osso Buco alla Milanese',
        dishIngredients:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam turpis ut semper accumsan. Nam dapibus sodales dolor sed eleifend. Vestibulum viverra sapien velit, volutpat interdum enim imperdiet sed. Donec facilisis porttitor nisi, non sodales felis efficitur ac. In hac habitasse platea dictumst. Ut elementum nunc vitae vestibulum lacinia.',
        dishPrice: 80000,
        dishImages:
            'https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/osso-buco-alla-milanese-1643401533.webp',
    },
];

function MenuList(): React.ReactNode {
    return (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockData.map((ele, idx) => (
                <MenuItem data={ele} key={idx} />
            ))}
        </div>
    );
}

export default MenuList;
