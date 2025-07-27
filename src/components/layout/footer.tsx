import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Nhân Tâm Phát. Đã đăng ký bản quyền.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Điều Khoản Dịch Vụ
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Chính Sách Bảo Mật
          </Link>
        </nav>
      </div>
    </footer>
  );
}
