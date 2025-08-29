("use client");
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

function Hero({ heading, paragraph }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Demo Tracking apps", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "My Team", href: "#myTeam" },
  ];

  return (
    <div className="w-full">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6  lg:px-12"
        >
          <Link to={"/"}>
            <div className="flex items-center">
              <img
                alt="Logo"
                src={assets.locationIcon}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-lg font-semibold text-white">
                Tracking Apps
              </span>
            </div>
          </Link>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm/6 font-semibold text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#003560dd] p-6 sm:max-w-sm sm:ring-1 sm:ring-white">
            <div className="">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 ">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto pt-10 sm:py-4 lg:pt-30">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-balance text-white max-sm:text-3xl max-sm:mb-5">
              {heading}
            </h1>
            <p className="mt-2 text-white">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
