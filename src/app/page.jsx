"use client";

import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Shield,
  Smartphone,
  CreditCard,
  Car,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}

      <section className=" bg-linear-to-br from-[#0284c7] via-[#0369a1] to-[#075985] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Fast & Secure FASTag Recharge
              </h1>
              <p className="text-xl mb-8 text-[#e0f2fe]">
                Recharge your FASTag in seconds with our easy-to-use platform.
                No waiting, no hassle!
              </p>
              <div className="flex gap-4">
                <Link
                  href="/register"
                  className="bg-white text-[#0369a1] px-8 py-4 rounded-lg font-semibold hover:bg-[#f0f9ff] transition flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/login"
                  className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0369a1] transition"
                >
                  Login
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <Car className="w-32 h-32 mx-auto mb-4 text-white/90" />
                <p className="text-center text-lg">Quick Recharge in 3 Steps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-[#e0f2fe] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#0284c7]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Recharge</h3>
              <p className="text-gray-600">
                Get your FASTag recharged instantly with real-time processing
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-[#e0f2fe] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#0284c7]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Secure</h3>
              <p className="text-gray-600">
                Bank-grade security with encrypted payment gateway
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-[#e0f2fe] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-[#0284c7]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Friendly</h3>
              <p className="text-gray-600">
                Recharge on the go with our mobile-optimized platform
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-[#e0f2fe] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-[#0284c7]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Multiple Payment Options
              </h3>
              <p className="text-gray-600">
                Pay via UPI, Cards, Net Banking, and Wallets
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-[#e0f2fe] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-[#0284c7]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multiple Vehicles</h3>
              <p className="text-gray-600">
                Manage and recharge multiple vehicles from one account
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-[#e0f2fe] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#0284c7]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Service</h3>
              <p className="text-gray-600">
                Recharge anytime, anywhere with round-the-clock availability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-gray-500">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#0284c7] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Login / Register</h3>
              <p className="text-gray-600">
                Create your account or login to get started
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0284c7] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Add Vehicle Details
              </h3>
              <p className="text-gray-600">
                Enter your vehicle number and FASTag details
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0284c7] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Recharge & Go</h3>
              <p className="text-gray-600">
                Choose amount, pay securely, and you're done!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0284c7] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Recharge?</h2>
          <p className="text-xl mb-8 text-[#e0f2fe]">
            Join thousands of happy customers who trust us for their FASTag
            needs
          </p>
          <Link
            href="/register"
            className="bg-white text-[#0369a1] px-8 py-4 rounded-lg font-semibold hover:bg-[#f0f9ff] transition inline-flex items-center gap-2"
          >
            Start Recharging Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* PWA Install Prompt */}
      {showInstallPrompt && (
        <div className="install-prompt bg-white rounded-lg shadow-2xl p-4 max-w-md mx-4">
          <div className="flex items-center justify-between gap-4">
            <Smartphone className="w-10 h-10 text-[#0284c7]" />
            <div className="flex-1">
              <h3 className="font-semibold">Install Our App</h3>
              <p className="text-sm text-gray-600">Get the best experience</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleInstallClick}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg text-sm"
              >
                Install
              </button>
              <button
                onClick={() => setShowInstallPrompt(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200 text-sm"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
