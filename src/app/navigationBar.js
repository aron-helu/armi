'use client';
import MenuItems from "./menuItems";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;  
  return (
    <div className="pt-2 mt-2 flex">
      {MenuItems.map((item, index) => {
        console.log(item.url);
        return (
          <>
            <Link href={item.url} passHref className="text-decoration-none ">
              <div
                className={`w-24 h-24 text-center mt-4 cursor-pointer ${
                  currentRoute === item.url ? 'text-white' : 'text-[#FEA116]'
                }`}
              >
                <p className="hover:text-gray-300 text-text-orange">{item.label}</p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Navbar;

