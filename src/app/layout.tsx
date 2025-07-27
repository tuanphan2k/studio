import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Lexend } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Nhân Tâm Phát - Đào tạo và tư vấn nhân sự, doanh nghiệp',
  description: 'Các khóa học và dịch vụ tư vấn chuyên nghiệp giúp nâng cao kỹ năng nhân sự và hiệu quả hoạt động của tổ chức.',
};

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const fontHeadline = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={cn(
        fontBody.variable,
        fontHeadline.variable,
        'font-body antialiased flex flex-col min-h-screen bg-background'
      )}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
