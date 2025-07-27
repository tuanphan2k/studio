
'use client';

import { usePathname } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';

export function ServicesTabs() {
  const pathname = usePathname();
  
  const tabs = [
      { name: "Các Khóa Đào Tạo", href: "/services/training" },
      { name: "Dịch Vụ Tư Vấn", href: "/services/consulting" },
  ];

  const currentTab = pathname.includes('/consulting') ? '/services/consulting' : '/services/training';

  return (
    <div className="w-full flex justify-center mb-12">
      <Tabs value={currentTab}>
        <TabsList>
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href} passHref legacyBehavior>
              <TabsTrigger value={tab.href}>
                {tab.name}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
