import type { Metadata } from 'next';
import MobileNav from '@/components/MobileNav';
import chefRoutes from '@/routes/chefRoutes';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            {children}
            <MobileNav type="chef" />
        </section>
    );
}
