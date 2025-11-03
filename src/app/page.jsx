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
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!!localStorage.getItem("isLoggedIn")) {
      router.push("/dashboard");
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}

      <section className=" bg-linear-to-br from-[#0284c7] via-[#0369a1] to-[#075985] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
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
                  href="/dashboard"
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
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
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
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16 px-4">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto "
        >
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
        </motion.div>
      </section>
      <section className="w-full py-12 md:py-12 lg:py-32 bg-background">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 md:px-6"
        >
          <div className="text-center mx-auto max-w-3xl mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>
          <div className="max-w-6xl mx-auto ">
            <Accordion
              type="single"
              collapsible
              className="rounded-2xl border  border-gray-300 divide-y divide-gray-300"
            >
              {faqs.map((faq, index) => {
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={"py-2 px-4  my-2"}
                  >
                    <AccordionTrigger className={"text-md "}>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0284c7] text-white py-16 px-4">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Recharge?</h2>
          <p className="text-xl mb-8 text-[#e0f2fe]">
            Join thousands of happy customers who trust us for their FASTag
            needs
          </p>
          <Link
            href="/recharge"
            className="bg-white text-[#0369a1] px-8 py-4 rounded-lg font-semibold hover:bg-[#f0f9ff] transition inline-flex items-center gap-2"
          >
            Start Recharging Now <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
