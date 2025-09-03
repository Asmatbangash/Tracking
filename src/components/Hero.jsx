("use client");
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Hero({ heading, paragraph }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", type: "route" },
    { name: "Demo Tracking apps", href: "/projects", type: "route" },
    { name: "Blogs", href: "/blogs", type: "route" },
    { name: "My Team", href: "/#myTeam", type: "hash" },
  ];

  return (
    <div className="w-full">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-12"
        >
          <Link to={"/"}>
            <div className="flex items-center">
              <img
                alt="Tracking Apps Logo"
                src={assets.locationIcon}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-lg font-semibold text-white">
                Tracking Apps
              </span>
            </div>
          </Link>
          {/* Mobile menu button */}
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
          {/* Desktop nav */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) =>
              item.type === "hash" ? (
                <HashLink
                  smooth
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold leading-6 text-white"
                >
                  {item.name}
                </HashLink>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-semibold leading-6 ${
                      isActive ? "text-yellow-400" : "text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>
        </nav>

        {/* Mobile menu */}
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
              <div className="-my-6">
                <div className="space-y-2 py-6">
                  {navigation.map((item) =>
                    item.type === "hash" ? (
                      <HashLink
                        smooth
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-semibold leading-6 text-white"
                      >
                        {item.name}
                      </HashLink>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-semibold leading-6 text-white"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero content */}
      <div className="relative isolate px-6 pt-20 lg:px-8">
        <div className="mx-auto pt-10 sm:py-4 lg:pt-32">
          <div className="text-center">
            <h1 className="text-6xl font-semibold tracking-tight text-balance text-white max-sm:text-4xl max-sm:mb-5">
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
