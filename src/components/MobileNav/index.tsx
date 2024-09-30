'use client';
import waiterRoutes from '@/routes/waiterRoutes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuItems from './MenuItems';
import React from 'react';
import chefRoutes from '@/routes/chefRoutes';

function MobileNav({ type }: { type: string }) {
    const routes = type === 'waiter' ? waiterRoutes : chefRoutes;
    const pathname = usePathname();
    return (
        <div className="mobile-Nav-Header-Height text-white text-3xl bg-secondary-cyan flex justify-around md:justify-center md:gap-[80px] items-center fixed bottom-0 left-0 right-0">
            {routes.map((ele, idx) => {
                const Icon = ele.icon;
                return ele.path ? (
                    <Link
                        className={`${ele.path === pathname ? 'bg-primary-cyan' : ''} p-2 rounded-xl`}
                        key={idx}
                        href={ele.path}
                    >
                        <Icon />
                    </Link>
                ) : (
                    <div key={idx}>
                        <MenuItems>
                            <Icon />
                        </MenuItems>
                    </div>
                );
            })}
        </div>
    );
}

export default MobileNav;
