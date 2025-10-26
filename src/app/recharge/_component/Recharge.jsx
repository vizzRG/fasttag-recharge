"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CreditCard, Car, Zap, Check, Smartphone, Wallet } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Recharge() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [step, setStep] = useState(1);

  const quickAmounts = [200, 300, 500, 1000, 2000, 5000];

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    const savedVehicles = JSON.parse(localStorage.getItem("vehicles") || "[]");
    setVehicles(savedVehicles);

    // Pre-select vehicle from query params
    const vehicleParam = searchParams.get("vehicle");
    if (vehicleParam) {
      setSelectedVehicle(vehicleParam);
    }
  }, [router, searchParams]);

  const handleRecharge = (e) => {
    e.preventDefault();
    if (!selectedVehicle || !amount || !paymentMethod) {
      alert("Please fill all fields");
      return;
    }
    setStep(2);
    // Simulate payment processing
    setTimeout(() => {
      setStep(3);
      // Save transaction
      const transaction = {
        id: Date.now(),
        vehicle: selectedVehicle,
        amount: `₹${amount}`,
        date: new Date().toISOString().split("T")[0],
        status: "Success",
        paymentMethod,
      };
      const transactions = JSON.parse(
        localStorage.getItem("transactions") || "[]"
      );
      localStorage.setItem(
        "transactions",
        JSON.stringify([transaction, ...transactions])
      );
    }, 2000);
  };

  if (step === 2) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#0284c7] mx-auto mb-4"></div>
          <p className="text-xl font-semibold">Processing Payment...</p>
          <p className="text-gray-600 mt-2">Please wait</p>
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Recharge Successful!
            </h1>
            <p className="text-gray-600 mb-8">
              Your FASTag has been recharged successfully
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-gray-600">Vehicle Number</p>
                  <p className="font-semibold text-gray-500">
                    {selectedVehicle}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="font-semibold text-green-600">₹{amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Payment Method</p>
                  <p className="font-semibold text-gray-500">{paymentMethod}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Transaction ID</p>
                  <p className="font-semibold text-gray-500">TXN{Date.now()}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => router.push("/dashboard")}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => {
                  setStep(1);
                  setAmount("");
                  setPaymentMethod("");
                }}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                Recharge Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Recharge FASTag
          </h1>
          <p className="text-gray-600">Quick and secure FASTag recharge</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleRecharge}
              className="bg-white rounded-xl shadow-md p-6 space-y-6"
            >
              {/* Select Vehicle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Vehicle *
                </label>
                {vehicles.length === 0 ? (
                  <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <Car className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600 mb-3">No vehicles added</p>
                    <button
                      type="button"
                      onClick={() => router.push("/vehicles")}
                      className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
                    >
                      Add Vehicle
                    </button>
                  </div>
                ) : (
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition pl-10 placeholder:text-gray-300 text-gray-500"
                    value={selectedVehicle}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                  >
                    <option value="">Choose a vehicle</option>
                    {vehicles.map((vehicle) => (
                      <option key={vehicle.id} value={vehicle.vehicleNumber}>
                        {vehicle.vehicleNumber} - {vehicle.vehicleType}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recharge Amount *
                </label>
                <div className="grid grid-cols-3 gap-3 mb-3 text-gray-500">
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt.toString())}
                      className={`py-3 px-4 rounded-lg border-2 font-semibold transition ${
                        amount === amt.toString()
                          ? "border-[#0284c7] bg-[#f0f9ff] text-[#0369a1]"
                          : "border-gray-300 hover:border-[#38bdf8]"
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  required
                  min="100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition pl-10 placeholder:text-gray-300 text-gray-500"
                  placeholder="Or enter custom amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method *
                </label>
                <div className="space-y-3 text-gray-500">
                  <label
                    className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition ${
                      paymentMethod === "UPI"
                        ? "border-[#0284c7] bg-[#f0f9ff]"
                        : "border-gray-300 hover:border-[#38bdf8]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="UPI"
                      checked={paymentMethod === "UPI"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-[#0284c7]"
                    />
                    <Smartphone className="w-6 h-6 text-[#0284c7]" />
                    <span className="font-semibold">UPI</span>
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition ${
                      paymentMethod === "Debit/Credit Card"
                        ? "border-[#0284c7] bg-[#f0f9ff]"
                        : "border-gray-300 hover:border-[#38bdf8]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="Debit/Credit Card"
                      checked={paymentMethod === "Debit/Credit Card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-[#0284c7]"
                    />
                    <CreditCard className="w-6 h-6 text-[#0284c7]" />
                    <span className="font-semibold">Debit/Credit Card</span>
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition ${
                      paymentMethod === "Net Banking"
                        ? "border-[#0284c7] bg-[#f0f9ff]"
                        : "border-gray-300 hover:border-[#38bdf8]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="Net Banking"
                      checked={paymentMethod === "Net Banking"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-[#0284c7]"
                    />
                    <Wallet className="w-6 h-6 text-[#0284c7]" />
                    <span className="font-semibold">Net Banking</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg  flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Proceed to Pay
              </button>
            </form>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="font-semibold text-lg mb-4 text-gray-700">
                Recharge Summary
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Vehicle</span>
                  <span className="font-semibold text-gray-500">
                    {selectedVehicle || "-"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-semibold text-gray-500">
                    ₹{amount || "0"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-semibold text-gray-500">₹0</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-semibold text-gray-600">
                    Total Amount
                  </span>
                  <span className="font-bold text-lg text-[#0284c7]">
                    ₹{amount || "0"}
                  </span>
                </div>
              </div>

              <div className="bg-[#f0f9ff] rounded-lg p-4 text-sm text-[#0c4a6e]">
                <p className="font-semibold mb-2">✨ Benefits</p>
                <ul className="space-y-1 text-sm">
                  <li>• Instant recharge</li>
                  <li>• No hidden charges</li>
                  <li>• 100% secure payment</li>
                  <li>• 24/7 support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
