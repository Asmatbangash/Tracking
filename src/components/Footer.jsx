import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  const socailImages = [
    {
      image: assets.facebook,
      href: "",
    },
    {
      image: assets.linkdin,
      href: "",
    },
    {
      image: assets.Twitter,
      href: "",
    },
    {
      image: assets.intagram,
      href: "",
    },
  ];
  return (
    <footer className="footer flex flex-col sm:flex-row justify-between items-center max-sm:items-start sm:items-start gap-6 py-10 px-6 sm:px-20">
      {/* Left Section */}
      <aside className="text-left max-w-md">
        <div className="flex justify-center max-sm:justify-start items-center mb-4">
          <img
            src={assets.footerLogo}
            alt="footerLogo"
            className="h-10 w-10 object-contain"
          />
          <h2 className="mx-2 text-xl sm:text-2xl font-bold">Tracking App</h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          Nam posuere accumsan porta. <br /> Integer id orci sed ante tincidunt
          tincidunt sit amet sed libero.
        </p>
        <p className="mt-2 text-xs text-gray-500">© Skyrev Theme 2020</p>
      </aside>

      {/* Right Section */}
      <nav className="text-center max-sm:text-left">
        <h6 className="footer-title text-lg font-semibold mb-3">Social</h6>
        <div className="flex gap-3">
          {socailImages.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="bg-gray-300 p-3 rounded-full hover:bg-gray-400 transition"
            >
              <img
                src={item.image}
                alt="social"
                className="h-5 w-5 object-contain"
              />
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
