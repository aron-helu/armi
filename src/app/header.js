import Image from "next/image";
import NavBar from "./navigationBar";

export default function Header() {
    return (
        <main className="px-0 w-full md:w-auto">
            <div className="flex mx-auto w-full">
                <div className="m-0 p-4" style={{ backgroundColor: '#0F172B' }}>
                    <Image src="/logo.png" alt="logo-Image" height={30} width={250} unoptimized />
                </div>
                <div className="flex flex-col w-full gap-4">
                    <div className="flex flex-row w-full h-12 p-2">
                        <div className="flex-start bg-white-50 flex items-center h-12 w-1/2">
                            <div className="flex items-center h-12 ml-4 p-4">
                                <Image src="/icons8-business-48.png" alt="envelop" width={40} height={25} />
                                <p className="ml-2 mt-3 text-sm text-gray-500">info@example.com</p>
                            </div>
                            <div className="flex items-center ml-4 p-4">
                                <Image src="/icons8-phone-50.png" alt="phone-Icon" width={30} height={20} />
                                <p className="ml-2 mt-3 text-sm text-gray-500">+2917193598</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-end border-solid w-3/4 gap-8 h-12 pl-2 pr-8">
                            <Image src="/icons8-whatsapp-50.png" alt="Whatsapp" width={30} height={20} />
                            <Image src="/icons8-facebook-50.png" alt="Facebook" width={30} height={20} />
                            <Image  src="/icons8-twitter-squared-50.png" alt="Twitter" width={30} height={20} />
                            <Image src="/icons8-instagram-50.png" alt="Instagram" width={30} height={20} />
                            <Image src="/icons8-linkedin-50.png" alt="LinkedIn" width={30} height={20} />
                        </div>
                    </div>
                    <div className="w-full h-24" style={{ backgroundColor: '#0F172B' }}>
                        <NavBar />
                    </div>
                </div>
            </div>
        </main>
    );
}
