'use client';
import Link from 'next/link';
import DarkMode from '../Sidebar/DarkMode';
import { RiInbox2Fill } from 'react-icons/ri';
import { navRoutes } from '@/routes';
import { usePathname } from 'next/navigation';

function Header() {
    const pathname = usePathname();

    return (
        <div className="sticky top-0 right-0 left-0 md:px-12 border-b-[1px] border-black flex justify-between items-center">
            <div className="flex items-center">
                <div className="mr-4 min-w-6">
                    <RiInbox2Fill />
                </div>
                <div className="flex">
                    {navRoutes.map((ele, idx) => (
                        <Link
                            href={ele.path}
                            key={idx}
                            className={`${
                                pathname === ele.path ? 'bg-primary-red' : 'bg-transparent'
                            } capitalize py-4 px-6 font-semibold`}
                        >
                            {ele.title}
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <DarkMode />
            </div>
        </div>
    );
}
export default Header;
