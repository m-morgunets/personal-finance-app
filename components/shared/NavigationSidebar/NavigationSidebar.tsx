import { MENU_CONFIG } from "@/shared/config/menu";
import { NavLink, Profile } from "./subcomponents";

export const NavigationSidebar = () => {
  return (
    <div className="bg-[#201f24] min-w-[270px] h-screen text-white p-[30px_0_70px] rounded-r-2xl relative">
      <div className="text-[32px] font-bold pl-[30px]">finance</div>

      <ul className="mt-[60px]">
        {MENU_CONFIG.map((item) => (
          <NavLink {...item} key={item.href} />
        ))}
      </ul>

      <div className="absolute bottom-8 -translate-x-2/4 left-2/4">
        <Profile />
      </div>
    </div>
  );
};
