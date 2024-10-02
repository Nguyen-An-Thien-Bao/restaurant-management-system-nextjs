import { Roboto } from 'next/font/google';
import './globals.css';

const inter = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} min-h-screen bg-theme-primary`}>{children}</body>
        </html>
    );
}
