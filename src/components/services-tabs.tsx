
'use client';

import { usePathname } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function ServicesTabs() {
  const pathname = usePathname();
  
  const tabs = [
      { name: "Các Khóa Đào Tạo", href: "/services/training" },
      { name: "Dịch Vụ Tư Vấn", href: "/services/consulting" },
  ];

  const currentTab = pathname.includes('/consulting') ? '/services/consulting' : '/services/training';

  return (
    <div className="w-full flex justify-center mb-12">
      <div className="bg-muted p-1 rounded-md">
        {tabs.map((tab) => (
          <Link href={tab.href} key={tab.href}>
            <button
              className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                currentTab === tab.href ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              )}
            >
              {tab.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
