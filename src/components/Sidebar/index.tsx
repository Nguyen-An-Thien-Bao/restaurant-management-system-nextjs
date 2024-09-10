'use client';
import React from 'react';
import { dashboardRoutes } from '@/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkMode from './DarkMode';
import { useContext } from 'react';
import { SidebarContext } from '@/context/SidebarContext';

function Sidebar(): React.ReactElement {
    const pathname = usePathname();
    const { isOpen, handleOpenSidebar, windowSize } = useContext(SidebarContext);

    const handleCloseSidebar = () => {
        if (windowSize < 768) {
            handleOpenSidebar();
        }
        return;
    };

    return (
        <>
            <aside
                className={`${
                    isOpen ? 'w-[170px] translate-x-0' : 'w-0 -translate-x-full'
                } z-20 ease-in-out duration-300 fixed top-0 left-0 bottom-0 min-w-40 min-h-full bg-primary-green shadow-[11px_0px_4px_-1px_rgba(0,0,0,0.54)] text-white bg-primary-dark`}
            >
                <div className="px-12 py-4">
                    <div>
                        <h2>Food Admin</h2>
                    </div>
                </div>
                {dashboardRoutes.map((ele, idx) => {
                    const Icon = ele.Icon;
                    return (
                        <Link
                            key={idx}
                            href={ele.path}
                            onClick={handleCloseSidebar}
                            className={`${
                                pathname === ele.path ? 'bg-primary-red' : 'dark:bg-primary-black'
                            } w-full select-none capitalize font-medium flex items-center py-2 px-4 my-4 transition-colors duration-75 hover-effect`}
                        >
                            <Icon className="mr-4" />
                            <span>{ele.title}</span>
                        </Link>
                    );
                })}
                <div className="block mx-auto absolute left-2/4 bottom-6 -translate-x-2/4">
                    <DarkMode />
                </div>
            </aside>

            {/* overlay */}
            {isOpen && (
                <div
                    onClick={handleOpenSidebar}
                    className="fixed md:hidden top-0 left-0 right-0 bottom-0 z-10 bg-black opacity-50"
                ></div>
            )}
        </>
    );
}

export default Sidebar;
