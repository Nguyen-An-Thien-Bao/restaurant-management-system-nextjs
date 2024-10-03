'use client';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

function Stepper() {
    const router = useRouter();

    const handleBackward = () => {
        router.back();
    };
    return (
        <div className="flex py-2 gap-x-2 justify-between items-center">
            <button onClick={() => handleBackward()} className="hover:text-primary-cyan text-2xl text-secondary-cyan">
                <FaChevronLeft />
            </button>

            <ol className="flex gap-x-2 items-center w-full">
                <div className="w-full text-gray-200">
                    <span className="font-bold text-sm">Tables</span>
                    <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-4 after:inline-block dark:after:border-blue-800"></li>
                </div>
                <div className="w-full text-secondary-cyan">
                    <span className="font-bold text-sm">Orders</span>
                    <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-secondary-cyan after:border-4 after:inline-block dark:after:border-gray-700"></li>
                </div>
                <div className="w-full text-gray-200">
                    <span className="font-bold text-sm">Confirm</span>
                    <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-4 after:inline-block dark:after:border-gray-700"></li>
                </div>
            </ol>

            <button className="hover:text-primary-cyan text-2xl text-secondary-cyan">
                <FaChevronRight />
            </button>
        </div>
    );
}

export default Stepper;
