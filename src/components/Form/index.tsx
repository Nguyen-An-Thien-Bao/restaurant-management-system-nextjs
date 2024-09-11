'use client';
import React, { useState } from 'react';
import { validateEmail, validatePhoneNumber } from '@/utils/regex';

const FormInit = {
    email: '',
    password: '',
    phone: '',
};

const errorForm = {
    email: '',
    password: '',
    phone: '',
};

function Form({ type }: { type: string }): React.ReactNode {
    const [form, setForm] = useState(FormInit);
    const [error, setError] = useState(errorForm);
    const [hidden, setHidden] = useState(false);

    const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, email: e.target.value }));
    };

    const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, password: e.target.value }));
    };

    const handleSetPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, phone: e.target.value }));
    };

    const handleSetHidden = () => {
        setHidden((prev) => !prev);
    };

    const handleLogin = () => {};

    const hanldeRegister = () => {};

    return (
        <>
            {type === 'login' ? (
                <div className="w-full mt-20 select-none md:w-[400px] mx-auto dark:bg-secondary-dark border border-black rounded-lg py-8 px-6">
                    <h3 className="font-semibold text-2xl capitalize">{type}</h3>
                    <p className="mb-4 mt-2">Enter your email and password to log in to the system</p>
                    <div className="flex-col">
                        <label className="capitalize text-sm mb-1 block cursor-pointer" htmlFor="userEmail">
                            email
                        </label>
                        <input
                            className="w-full bg-transparent px-2 py-1 rounded-md  outline-none border border-black focus:outline focus:outline-primary-red mb-4 outline-offset-0"
                            type="text"
                            name="userEmail"
                            id="userEmail"
                            placeholder="m@gmail.com"
                            value={form.email}
                            onChange={(e) => handleSetEmail(e)}
                        />
                        <label className="capitalize text-sm mb-1 block cursor-pointer" htmlFor="userPassword">
                            password
                        </label>
                        <input
                            type="password"
                            className="w-full bg-transparent px-2 py-1 rounded-md  outline-none border border-black focus:outline focus:outline-primary-red mb-4 outline-offset-0"
                            name="userPassword"
                            placeholder="eg...123456789"
                            id="userPassword"
                            value={form.password}
                            onChange={(e) => handleSetPassword(e)}
                        />
                        <p>{}</p>
                        <button className="w-full bg-white capitalize  text-black border border-black  rounded-md py-2 text-sm font-semibold hover:bg-primary-red hover:transition-all hover:text-white hover:border-primary-red">
                            {type}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="w-full mt-20 select-none md:w-[400px] mx-auto dark:bg-secondary-dark border border-black rounded-lg py-8 px-6">
                    <h3 className="font-semibold text-2xl capitalize select-none">{type}</h3>
                    <p className="mb-4 mt-2 select-none">Enter your email and password to log in to the system</p>
                    <div className="flex-col">
                        <label className="capitalize text-sm mb-1 block cursor-pointer" htmlFor="userEmail">
                            email
                        </label>
                        <input
                            className="w-full bg-transparent px-2 py-1 rounded-md  outline-none border border-black focus:outline focus:outline-primary-red mb-4 outline-offset-0"
                            type="text"
                            name="userEmail"
                            id="userEmail"
                            placeholder="m@gmail.com"
                            value={form.email}
                            onChange={(e) => handleSetEmail(e)}
                        />
                        <label className="capitalize text-sm mb-1 block cursor-pointer" htmlFor="userPassword">
                            password
                        </label>
                        <input
                            type="password"
                            className="w-full bg-transparent px-2 py-1 rounded-md  outline-none border border-black focus:outline focus:outline-primary-red mb-4 outline-offset-0"
                            name="userPassword"
                            id="userPassword"
                            placeholder="eg...123456789"
                            value={form.password}
                            onChange={(e) => handleSetPassword(e)}
                        />
                        <label className="capitalize text-sm mb-1 block cursor-pointer" htmlFor="userPhone">
                            phone number
                        </label>
                        <input
                            type="text"
                            className="w-full bg-transparent px-2 py-1 rounded-md  outline-none border border-black focus:outline focus:outline-primary-red mb-4 outline-offset-0"
                            name="userPhone"
                            id="userPhone"
                            value={form.phone}
                            placeholder="eg...123456789"
                            onChange={(e) => handleSetPhoneNumber(e)}
                        />
                        <button className="w-full bg-white capitalize  text-black border border-black  rounded-md py-2 text-sm font-semibold hover:bg-primary-red hover:transition-all hover:text-white hover:border-primary-red">
                            {type}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Form;
