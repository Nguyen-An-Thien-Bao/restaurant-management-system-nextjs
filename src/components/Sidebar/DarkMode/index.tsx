'use client';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function DarkMode() {
    const { setTheme, resolvedTheme } = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleOpenPanel = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePanel = () => {
        setAnchorEl(null);
    };

    const handleOpenDarkMode = () => {
        setTheme('dark');
        setAnchorEl(null);
    };

    const handleOpenLightMode = () => {
        setTheme('light');
        setAnchorEl(null);
    };

    return (
        <>
            <button
                id="demo-positioned-div"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpenPanel}
                className="dark:text-white text-black dark:border-white border-black border rounded-md w-8 aspect-square flex justify-center items-center hover-effect"
            >
                <span className="block">
                    {resolvedTheme && resolvedTheme === 'dark' ? (
                        <RiSunFill className=" text-xl " />
                    ) : (
                        <RiMoonClearFill className=" text-xl " />
                    )}
                </span>
            </button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClosePanel}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleOpenDarkMode}>Dark Mode </MenuItem>
                <MenuItem onClick={handleOpenLightMode}>Light Mode </MenuItem>
            </Menu>
        </>
    );
}

export default DarkMode;
