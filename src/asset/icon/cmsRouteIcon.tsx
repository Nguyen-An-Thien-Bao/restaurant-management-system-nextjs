'use client';
import { IconType } from 'react-icons';
import { FaHistory } from 'react-icons/fa';
import { FaChartSimple, FaHouse, FaBellConcierge, FaUsers, FaBurger } from 'react-icons/fa6';

export const CmsHomeIcon: IconType = ({ className }: { className?: string }) => {
    return <FaHouse className={className} />;
};

export const CmsBurger: IconType = ({ className }: { className?: string }) => {
    return <FaBurger className={className} />;
};

export const CmsChartIcon: IconType = ({ className }: { className?: string }) => {
    return <FaChartSimple className={className} />;
};

export const CmsHistoryIcon: IconType = ({ className }: { className?: string }) => {
    return <FaHistory className={className} />;
};

export const CmsBellIcon: IconType = ({ className }: { className?: string }) => {
    return <FaBellConcierge className={className} />;
};

export const CmsUserIcon: IconType = ({ className }: { className?: string }) => {
    return <FaUsers className={className} />;
};
