import { NavigationSidebar } from "@/components/shared";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <NavigationSidebar />
      <div className="p-10 flex flex-col h-screen flex-auto">{children}</div>
    </div>
  );
}
