"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  CreditCard,
  Car,
  Receipt,
  Plus,
  Zap,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Dashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    const name = localStorage.getItem("userName") || "User";
    setUserName(name);

    // Load vehicles from localStorage
    const savedVehicles = JSON.parse(localStorage.getItem("vehicles") || "[]");
    setVehicles(savedVehicles);
  }, [router]);

  const stats = [
    {
      label: "Total Vehicles",
      value: vehicles.length,
      icon: Car,
      color: "bg-blue-500",
    },
    {
      label: "Active FASTags",
      value: vehicles.length,
      icon: CreditCard,
      color: "bg-green-500",
    },
    {
      label: "Total Recharges",
      value: "12",
      icon: Zap,
      color: "bg-purple-500",
    },
    {
      label: "Amount Spent",
      value: "₹5,400",
      icon: TrendingUp,
      color: "bg-orange-500",
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      vehicle: "MH 01 AB 1234",
      amount: "₹500",
      date: "2024-01-15",
      status: "Success",
    },
    {
      id: 2,
      vehicle: "MH 02 CD 5678",
      amount: "₹300",
      date: "2024-01-14",
      status: "Success",
    },
    {
      id: 3,
      vehicle: "MH 01 AB 1234",
      amount: "₹200",
      date: "2024-01-10",
      status: "Success",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userName}! 👋
          </h1>
          <p className="text-gray-500">
            Manage your FASTags and recharges from here
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link
            href="/recharge"
            className="card 
            hover:border-[#0ea5e9] border-2 border-transparent rounded-md cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#e0f2fe] w-12 h-12 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#0284c7]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-500 text-lg">
                  Quick Recharge
                </h3>
                <p className="text-gray-600 text-sm">
                  Recharge FASTag instantly
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/vehicles"
            className="card hover:border-[#0ea5e9] border-2 border-transparent rounded-md cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-500">
                  My Vehicles
                </h3>
                <p className="text-gray-600 text-sm">Manage your vehicles</p>
              </div>
            </div>
          </Link>

          <Link
            href="/transactions"
            className="card hover:border-[#0ea5e9] border-2 border-transparent rounded-md cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                <Receipt className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-500">
                  Transactions
                </h3>
                <p className="text-gray-600 text-sm">
                  View transaction history
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* My Vehicles Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">My Vehicles</h2>
            <Link
              href="/vehicles"
              className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Vehicle
            </Link>
          </div>

          {vehicles.length === 0 ? (
            <div className="text-center py-12">
              <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">No vehicles added yet</p>
              <Link
                href="/vehicles"
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              >
                Add Your First Vehicle
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-500">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#0ea5e9] transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Car className="w-8 h-8 text-[#0284c7]" />
                    <div>
                      <p className="font-semibold text-lg">
                        {vehicle.vehicleNumber}
                      </p>
                      <p className="text-sm text-gray-600">
                        {vehicle.vehicleType}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>FASTag: {vehicle.fastagId}</p>
                    <p>
                      Balance:{" "}
                      <span className="text-green-600 font-semibold">
                        ₹{vehicle.balance || "0"}
                      </span>
                    </p>
                  </div>
                  <Link
                    href={`/recharge?vehicle=${vehicle.vehicleNumber}`}
                    className="mt-3 block text-center bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg text-sm"
                  >
                    Recharge Now
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-md p-6 text-gray-500">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Recent Transactions
            </h2>
            <Link
              href="/transactions"
              className="text-[#0284c7] hover:text-[#0369a1] font-semibold"
            >
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                    Vehicle
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{transaction.vehicle}</td>
                    <td className="px-4 py-3 font-semibold">
                      {transaction.amount}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {transaction.date}
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Balance Alert */}
        {vehicles.some((v) => (v.balance || 0) < 100) && (
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-yellow-800">
                  Low Balance Alert
                </h3>
                <p className="text-yellow-700 text-sm">
                  Some of your vehicles have low FASTag balance. Recharge now to
                  avoid inconvenience.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
