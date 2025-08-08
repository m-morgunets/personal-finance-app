import { getUserSession } from "@/lib/getUserSession";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getUserSession();

  if (session) {
    return redirect("/overview");
  }
  return (
    <div className="h-screen flex items-center justify-center">{children}</div>
  );
}
