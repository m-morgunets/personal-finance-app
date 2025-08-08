import { NavigationSidebar } from "@/components/shared";
import { Providers } from "./providers";
import { getUserSession } from "@/lib/getUserSession";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getUserSession();

  if (!session) {
    return redirect("/login");
  }

  return (
    <Providers>
      <div className="flex">
        <NavigationSidebar />
        <div className="p-10 flex flex-col h-screen flex-auto">{children}</div>
      </div>
    </Providers>
  );
}
