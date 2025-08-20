("use client");
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { assets } from "../assets/assets";

const navigation = [
  { name: "Demo Tracking apps", href: "#", current: true },
  { name: "Blogs", href: "#", current: false },
  { name: "My team", href: "#", current: false },
];

function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex shadow-black items-center justify-between p-6  lg:px-12"
        >
          <div className="flex items-center">
            <img alt="Logo" src={assets.locationIcon} className="h-8 w-auto" />
            <span className="ml-2 text-lg font-semibold text-white">
              Tracking Apps
            </span>
          </div>
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
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-white"
              >
                {item.name}
              </a>
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto py-10 sm:py-20 lg:py-30">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              <span className="text-[#2196F3]">GPS </span> Tracking & Live
              Location Monitoring Anywhere, Anytime!
            </h1>
            <p className="my-2 text-white">
              Track vehicles, employees, assets & more in real-time with 99%
              accuracy.
            </p>
            <button className="btn btn-info">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
