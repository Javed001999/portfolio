import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
function Footer() {
  return (
    <>
      <footer className="py-12">
        <hr className='border-t-2 border-gray-300' />
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="mt-8  border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 My PortFolio India, All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Javed Ansari</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
