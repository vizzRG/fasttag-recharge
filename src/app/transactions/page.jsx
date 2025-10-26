"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Receipt, Download, Filter, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Transactions() {
  const router = useRouter();
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    // Load transactions with some demo data
    const savedTransactions = JSON.parse(
      localStorage.getItem("transactions") || "[]"
    );
    const demoTransactions = [
      {
        id: 1,
        vehicle: "MH 01 AB 1234",
        amount: "₹500",
        date: "2024-01-15",
        status: "Success",
        paymentMethod: "UPI",
        transactionId: "TXN1705312800000",
      },
      {
        id: 2,
        vehicle: "MH 02 CD 5678",
        amount: "₹300",
        date: "2024-01-14",
        status: "Success",
        paymentMethod: "Card",
        transactionId: "TXN1705226400000",
      },
      {
        id: 3,
        vehicle: "MH 01 AB 1234",
        amount: "₹1000",
        date: "2024-01-10",
        status: "Success",
        paymentMethod: "UPI",
        transactionId: "TXN1704873600000",
      },
      {
        id: 4,
        vehicle: "MH 03 EF 9012",
        amount: "₹200",
        date: "2024-01-08",
        status: "Success",
        paymentMethod: "Net Banking",
        transactionId: "TXN1704700800000",
      },
      {
        id: 5,
        vehicle: "MH 01 AB 1234",
        amount: "₹500",
        date: "2024-01-05",
        status: "Failed",
        paymentMethod: "Card",
        transactionId: "TXN1704441600000",
      },
    ];

    const allTransactions = [...savedTransactions, ...demoTransactions];
    setTransactions(allTransactions);
    setFilteredTransactions(allTransactions);
  }, [router]);

  useEffect(() => {
    const filtered = transactions.filter(
      (t) =>
        t.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.transactionId.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  }, [searchTerm, transactions]);

  const downloadReceipt = (transaction) => {
    alert(`Downloading receipt for ${transaction.transactionId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Transaction History
          </h1>
          <p className="text-gray-600">
            View all your FASTag recharge transactions
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition pl-10 placeholder:text-gray-300 text-gray-500 "
                  placeholder="Search by vehicle number or transaction ID"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200 w-full flex items-center justify-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Transactions List */}
        {filteredTransactions.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Receipt className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Transactions Found
            </h3>
            <p className="text-gray-600">
              Start recharging to see your transaction history
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      Transaction ID
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      Vehicle
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      Payment Method
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTransactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="hover:bg-gray-50 transition text-gray-500"
                    >
                      <td className="px-6 py-4 text-sm font-mono text-gray-500">
                        {transaction.transactionId}
                      </td>
                      <td className="px-6 py-4 font-semibold">
                        {transaction.vehicle}
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#0284c7]">
                        {transaction.amount}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {transaction.paymentMethod}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {transaction.date}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            transaction.status === "Success"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {transaction.status === "Success" && (
                          <button
                            onClick={() => downloadReceipt(transaction)}
                            className="text-[#0284c7] hover:text-[#0369a1] flex items-center gap-1 text-sm font-semibold"
                          >
                            <Download className="w-4 h-4" />
                            Receipt
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600 text-sm mb-1">Total Transactions</p>
            <p className="text-3xl font-bold text-gray-900">
              {transactions.length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600 text-sm mb-1">Successful</p>
            <p className="text-3xl font-bold text-green-600">
              {transactions.filter((t) => t.status === "Success").length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600 text-sm mb-1">Total Spent</p>
            <p className="text-3xl font-bold text-[#0284c7]">
              ₹
              {transactions
                .filter((t) => t.status === "Success")
                .reduce(
                  (acc, t) => acc + parseInt(t.amount.replace("₹", "")),
                  0
                )}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
