'use client';
import { FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

function Stepper() {
    const router = useRouter();

    const handleBackward = () => {
        router.back();
    };
    return (
        <div className="flex mobile-Nav-Header-Height bg-secondary-cyan">
            <button onClick={() => handleBackward()} className="hover:text-primary-cyan text-2xl text-white">
                <FaChevronLeft />
            </button>
            <ol className="flex items-center w-full p-3 space-x-2 font-bold text-xl text-center text-white sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                <li className="flex items-center">
                    <span className="flex items-center border-white justify-center w-5 h-5 me-2 text-xs border-2 rounded-full shrink-0">
                        1
                    </span>
                    Table <span className="hidden sm:inline-flex sm:ms-2">Status</span>
                    <svg
                        className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 12 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m7 9 4-4-4-4M1 9l4-4-4-4"
                        />
                    </svg>
                </li>
                <li className="flex items-center text-primary-cyan">
                    <span className="flex border-primary-cyan items-center justify-center w-5 h-5 me-2 text-xs border-2 rounded-full shrink-0 dark:border-gray-400">
                        2
                    </span>
                    Make <span className="hidden sm:inline-flex sm:ms-2">Orders</span>
                    <svg
                        className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 12 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m7 9 4-4-4-4M1 9l4-4-4-4"
                        />
                    </svg>
                </li>
                <li className="flex items-center">
                    <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border-2 border-white rounded-full shrink-0 dark:border-gray-400">
                        3
                    </span>
                    Confirm
                </li>
            </ol>
        </div>
    );
}

export default Stepper;
