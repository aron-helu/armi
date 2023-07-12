import Image from "next/image";
import logo from "../../public/logo.png";
import email from "../../public/icons8-business-48.png";
import phone from "../../public/icons8-phone-50.png";
import facebook from "../../public/icons8-facebook-50.png";
import instagram from "../../public/icons8-instagram-50.png";
import linkedin from "../../public/icons8-linkedin-50.png";
import twitter from "../../public/icons8-twitter-squared-50.png";

export default function NavigationBar() {
  return (
    <div className="px-0 w-full md:w-auto">
      <div className="flex mx-auto w-full">
        <div className="m-0">
          <Image src={logo} alt="logo-Image" height={70} width={450} />
        </div>
        <div className="flex flex-row w-full h-12 p-2">
          <div className="flex-start bg-white-50 flex items-center h-12 w-1/2">
            <div className="flex items-center h-20 ml-4 p-8">
              <Image src={email} alt="envelop" width={30} height={20} />
              <p className="ml-2 text-sm text-gray-500">info@example.com</p>
            </div>
            <div className="flex items-center ml-4 p-4">
              <Image src={phone} alt="phone-Icon" width={30} height={20} />
              <p className="ml-2 text-sm text-gray-500">+012 345 6789</p>
            </div>
          </div>
          <div className="flex items-center justify-end border-solid w-3/4 gap-8 h-12 pl-2 pr-16">
            <Image src={facebook} alt="Facebook" width={30} height={20} />
            <Image src={twitter} alt="Twitter" width={30} height={20} />
            <Image src={instagram} alt="Instagram" width={30} height={20} />
            <Image src={linkedin} alt="LinkedIn" width={30} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
