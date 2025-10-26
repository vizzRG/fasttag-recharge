"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, User, LogOut, CreditCard } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("isLoggedIn"));
  }, [pathname]);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <nav className="bg-white  shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-[#0284c7]"
          >
            <CreditCard className="w-6 h-6" />
            FASTag Recharge
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-gray-500">
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className={`   hover:text-[#0284c7] transition ${
                    pathname === "/dashboard"
                      ? "text-[#0284c7] font-semibold"
                      : ""
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/vehicles"
                  className={`hover:text-[#0284c7] transition ${
                    pathname === "/vehicles"
                      ? "text-[#0284c7] font-semibold"
                      : ""
                  }`}
                >
                  My Vehicles
                </Link>
                <Link
                  href="/recharge"
                  className={`hover:text-[#0284c7] transition ${
                    pathname === "/recharge"
                      ? "text-[#0284c7] font-semibold"
                      : ""
                  }`}
                >
                  Recharge
                </Link>
                <Link
                  href="/transactions"
                  className={`hover:text-[#0284c7] transition ${
                    pathname === "/transactions"
                      ? "text-[#0284c7] font-semibold"
                      : ""
                  }`}
                >
                  Transactions
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="hover:text-[#0284c7] transition">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
                >
                  SignUp
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-400"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {isLoggedIn ? (
              <div className="flex flex-col gap-4 text-gray-500">
                <Link
                  href="/dashboard"
                  className="hover:text-[#0284c7] transition"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/vehicles"
                  className="hover:text-[#0284c7] transition"
                  onClick={() => setIsOpen(false)}
                >
                  My Vehicles
                </Link>
                <Link
                  href="/recharge"
                  className="hover:text-[#0284c7] transition"
                  onClick={() => setIsOpen(false)}
                >
                  Recharge
                </Link>
                <Link
                  href="/transactions"
                  className="hover:text-[#0284c7] transition"
                  onClick={() => setIsOpen(false)}
                >
                  Transactions
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="text-left text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Link
                  href="/login"
                  className="hover:text-[#0284c7]  hover:bg-[#0369a1] text-gray-500 font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg inline-block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg inline-block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
