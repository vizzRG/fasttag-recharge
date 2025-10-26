import Link from "next/link";
import {
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl text-white mb-4"
            >
              <CreditCard className="w-6 h-6" />
              FASTag Recharge
            </Link>
            <p className="text-sm mb-4">
              Fast, secure, and reliable FASTag recharge platform. Recharge
              anytime, anywhere.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#0284c7] transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#0284c7] transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#0284c7] transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#0284c7] transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#38bdf8] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-[#38bdf8] transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/recharge"
                  className="hover:text-[#38bdf8] transition"
                >
                  Recharge
                </Link>
              </li>
              <li>
                <Link
                  href="/transactions"
                  className="hover:text-[#38bdf8] transition"
                >
                  Transactions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#38bdf8] transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#38bdf8] transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#38bdf8] transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#38bdf8] transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                support@fastagrecharge.com
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                +91 1800-123-4567
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 FASTag Recharge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
