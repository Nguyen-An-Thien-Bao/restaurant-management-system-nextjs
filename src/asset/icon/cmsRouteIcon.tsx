'use client';
import { IconType } from 'react-icons';
import { FaHome, FaChartBar, FaHistory, FaHamburger, FaUsers } from 'react-icons/fa';

export const CmsHomeIcon: IconType = ({ className }: { className?: string }) => {
    return <FaHome className={className} />;
};

export const CmsChartIcon: IconType = ({ className }: { className?: string }) => {
    return <FaChartBar className={className} />;
};

export const CmsHistoryIcon: IconType = ({ className }: { className?: string }) => {
    return <FaHistory className={className} />;
};

export const CmsHamburgerIcon: IconType = ({ className }: { className?: string }) => {
    return <FaHamburger className={className} />;
};

export const CmsUserIcon: IconType = ({ className }: { className?: string }) => {
    return <FaUsers className={className} />;
};
