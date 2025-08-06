import { NavigationSidebar } from "@/components/shared";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <div className="flex">
        <NavigationSidebar />
        <div className="p-10 flex flex-col h-screen flex-auto">{children}</div>
      </div>
    </Providers>
  );
}
