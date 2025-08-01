import { MENU_CONFIG } from "@/shared/config/menu";
import { NavLink } from "./subcomponents";

export const NavigationSidebar = () => {
  return (
    <div className="bg-[#201f24] w-[300px] h-screen text-white p-[30px_0_70px] rounded-r-2xl">
      <div className="text-[32px] font-bold pl-[30px]">finance</div>

      <ul className="mt-[60px]">
        {MENU_CONFIG.map((item) => (
          <NavLink {...item} key={item.href} />
        ))}
      </ul>
    </div>
  );
};
