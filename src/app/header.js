import Image from "next/image";
import NavBar from "./navigationBar";

export default function Header() {
  return (
    <main className="px-0 w-full md:w-auto">
      <div className="flex mx-auto w-full">
        <div
          className="m-0 p-2 flex-grow"
          style={{
            backgroundColor: "#0F172B",
            height: "auto",
            width: "auto"
          }}
        >
          <Image
            src="/Logo.png"
            alt="logo-Image"
            width={100}
            height={100}
            className="h-auto w-auto"
            unoptimized
          />
        </div>

        <div className="flex flex-col w-full gap-4">
          <div className="hidden sm:block">
            <div className="flex flex-row w-full h-8 p-2">
              <div className="flex-start flex items-center h-12 w-1/2">
                <div className="flex items-center h-12 ml-2 p-2">
                  <Image
                    src="/icons8-business-48.png"
                    alt="envelop"
                    width={40}
                    height={25}
                  />
                  <p className="ml-2 mt-3 text-sm text-gray-500">
                    info@example.com
                  </p>
                </div>
                <div className="flex items-center ml-4 p-4">
                  <Image
                    src="/icons8-phone-50.png"
                    alt="phone-Icon"
                    width={30}
                    height={20}
                  />
                  <p className="ml-2 mt-3 text-sm text-gray-500">+2917193598</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center justify-end border-solid w-3/4 gap-8 h-12 pl-2 pr-4">
                <Image
                  src="/icons8-whatsapp-50.png"
                  alt="Whatsapp"
                  width={30}
                  height={20}
                />
                <Image
                  src="/icons8-facebook-50.png"
                  alt="Facebook"
                  width={30}
                  height={20}
                />
                <Image
                  src="/icons8-twitter-squared-50.png"
                  alt="Twitter"
                  width={30}
                  height={20}
                />
                <Image
                  src="/icons8-instagram-50.png"
                  alt="Instagram"
                  width={30}
                  height={20}
                />
                <Image
                  src="/icons8-linkedin-50.png"
                  alt="LinkedIn"
                  width={30}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="w-full h-28" style={{ backgroundColor: "#0F172B" }}>
            <NavBar />
          </div>
        </div>
      </div>
    </main>
  );
}
