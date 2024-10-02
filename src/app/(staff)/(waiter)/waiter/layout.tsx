import MobileNav from '@/components/MobileNav';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <div className="">{children}</div>
            <MobileNav type="waiter" />
        </section>
    );
}
