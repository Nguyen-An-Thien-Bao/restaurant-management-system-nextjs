import Form from '@/components/Form';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login',
    description: 'Generated by create next app',
};

function LoginPage(): React.ReactNode {
    return (
        <section className="px-8 md:p-0">
            <Form />
        </section>
    );
}

export default LoginPage;
