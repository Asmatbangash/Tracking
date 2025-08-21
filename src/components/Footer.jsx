import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  const socailImages = [
    {
      image: assets.facebook,
    },
    {
      image: assets.linkdin,
    },
    {
      image: assets.Twitter,
    },
    {
      image: assets.intagram,
    },
  ];
  return (
    <footer className="footer flex justify-between items-center sm:footer-horizontal  py-10 px-20">
      <aside>
        <div className="flex items-center">
          <img src={assets.footerLogo} alt="footerLogo" />
          <h2 className="mx-2 text-2xl font-bold">Tracking App</h2>
        </div>
        <p>
          Nam posuere accumsan porta. <br /> Integer id orci sed ante tincidunt
          tincidunt sit amet sed libero.
        </p>
        <p>© Skyrev Theme 2020 </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="flex justify-center items-center">
          {socailImages.map((item) => (
            <a className="bg-gray-300 m-2 py-3 px-4 text-white rounded-full">
              <img src={item.image} alt="w-10 h-10" />
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
