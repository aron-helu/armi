'use client';
import MenuItems from "./menuItems";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;  
  return (
    <div className="p-4 mt-4 flex">
      {MenuItems.map((item, index) => {
        console.log(item.url);
        return (
          <>
            <Link href={item.url} passHref>
              <div
                className={`w-24 h-24 text-center mt-3 cursor-pointer ${
                  currentRoute === item.url ? 'text-white' : 'text-yellow-300'
                }`}
              >
                <p className="hover:text-gray-300 text-yellow-300">{item.label}</p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Navbar;