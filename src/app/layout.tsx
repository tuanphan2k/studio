import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Lora, Inter } from 'next/font/google';
import { FloatingPhone } from '@/components/layout/floating-phone';

export const metadata: Metadata = {
  title: 'Nhân Tâm Phát - Đào tạo chuyên sâu cho chuyên gia nhân sự',
  description: 'Các khóa học chuyên nghiệp được thiết kế để nâng cao kỹ năng nhân sự và thúc đẩy sự nghiệp của bạn.',
};

const fontBody = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-body',
});

const fontHeadline = Lora({
  subsets: ['latin', 'vietnamese'],
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
        <FloatingPhone />
        <Toaster />
      </body>
    </html>
  );
}
