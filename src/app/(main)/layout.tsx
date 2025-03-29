"use client";

import { usePathname } from "next/navigation";
import { PhotoIcon, DocumentIcon, FilmIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const NAV_ITEMS = [
  {
    name: "图片转换",
    icon: PhotoIcon,
    href: "/convert/image",
    description: "支持JPG/PNG/WEBP等格式互转",
    formats: ["jpg", "png", "webp", "gif"],
  },
  {
    name: "PDF工具",
    icon: DocumentIcon,
    href: "/convert/pdf",
    description: "PDF转Word/Excel/图片，合并拆分",
    formats: ["pdf", "docx", "xlsx"],
  },
  {
    name: "视频转换",
    icon: FilmIcon,
    href: "/convert/video",
    description: "转换视频格式，提取音频",
    formats: ["mp4", "mov", "avi", "mp3"],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen md:flex">
      <div className="min-h-screen bg-gray-50 md:flex w-full">
        <aside className="fixed md:relative md:flex-shrink-0 w-full md:w-48 h-16 md:h-auto bg-white shadow-lg md:shadow-none z-50 md:z-auto flex md:block">
          <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-200 ${
                  pathname.startsWith(item.href)
                    ? "bg-blue-50"
                    : "hover:bg-gray-100"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <item.icon
                  className={`h-5 w-5 ${
                    pathname.startsWith(item.href)
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}
                />
                <span
                  className={`font-medium ${
                    pathname.startsWith(item.href)
                      ? "text-blue-900"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-4 md:p-8 min-h-[calc(100vh-4rem)] md:min-h-screen">
          <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
