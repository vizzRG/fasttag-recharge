"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Car, Plus, Edit2, Trash2, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Vehicles() {
  const router = useRouter();
  const [vehicles, setVehicles] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    vehicleNumber: "",
    vehicleType: "",
    fastagId: "",
    bankName: "",
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    loadVehicles();
  }, [router]);

  const loadVehicles = () => {
    const savedVehicles = JSON.parse(localStorage.getItem("vehicles") || "[]");
    setVehicles(savedVehicles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVehicle = {
      id: Date.now(),
      ...formData,
      balance: Math.floor(Math.random() * 500) + 100, // Random balance for demo
      addedDate: new Date().toISOString(),
    };

    const updatedVehicles = [...vehicles, newVehicle];
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
    setVehicles(updatedVehicles);
    setShowAddForm(false);
    setFormData({
      vehicleNumber: "",
      vehicleType: "",
      fastagId: "",
      bankName: "",
    });
  };

  const deleteVehicle = (id) => {
    if (confirm("Are you sure you want to remove this vehicle?")) {
      const updatedVehicles = vehicles.filter((v) => v.id !== id);
      localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
      setVehicles(updatedVehicles);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              My Vehicles
            </h1>
            <p className="text-gray-600">
              Manage your vehicles and FASTag details
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold py-1 px-2 md:px-4 md:py-2 rounded-lg transition duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Vehicle
          </button>
        </div>

        {/* Add Vehicle Form */}
        {showAddForm && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 text-gray-500">
            <h2 className="text-xl font-bold mb-6">Add New Vehicle</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Number *
                </label>
                <input
                  type="text"
                  required
                  className="input-field"
                  placeholder="MH 01 AB 1234"
                  value={formData.vehicleNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      vehicleNumber: e.target.value.toUpperCase(),
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Type *
                </label>
                <select
                  required
                  className="input-field"
                  value={formData.vehicleType}
                  onChange={(e) =>
                    setFormData({ ...formData, vehicleType: e.target.value })
                  }
                >
                  <option value="">Select Type</option>
                  <option value="Car">Car</option>
                  <option value="SUV">SUV</option>
                  <option value="Bike">Bike</option>
                  <option value="Truck">Truck</option>
                  <option value="Bus">Bus</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  FASTag ID *
                </label>
                <input
                  type="text"
                  required
                  className="input-field"
                  placeholder="Enter FASTag ID"
                  value={formData.fastagId}
                  onChange={(e) =>
                    setFormData({ ...formData, fastagId: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bank Name *
                </label>
                <select
                  required
                  className="input-field"
                  value={formData.bankName}
                  onChange={(e) =>
                    setFormData({ ...formData, bankName: e.target.value })
                  }
                >
                  <option value="">Select Bank</option>
                  <option value="ICICI Bank">ICICI Bank</option>
                  <option value="HDFC Bank">HDFC Bank</option>
                  <option value="Axis Bank">Axis Bank</option>
                  <option value="SBI">State Bank of India</option>
                  <option value="Paytm Payments Bank">
                    Paytm Payments Bank
                  </option>
                  <option value="Kotak Mahindra Bank">
                    Kotak Mahindra Bank
                  </option>
                </select>
              </div>

              <div className="md:col-span-2 flex gap-4">
                <button
                  type="submit"
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
                >
                  Add Vehicle
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Vehicles List */}
        {vehicles.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Car className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Vehicles Added
            </h3>
            <p className="text-gray-600 mb-6">
              Add your first vehicle to start recharging
            </p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
            >
              Add Vehicle Now
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-500">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <div className="bg-linear-to-r from-[#0ea5e9] to-[#0284c7] p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Car className="w-10 h-10" />
                    <CreditCard className="w-8 h-8 opacity-50" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">
                    {vehicle.vehicleNumber}
                  </h3>
                  <p className="text-[#e0f2fe]">{vehicle.vehicleType}</p>
                </div>

                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">FASTag ID:</span>
                      <span className="font-semibold">{vehicle.fastagId}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Bank:</span>
                      <span className="font-semibold">{vehicle.bankName}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Balance:</span>
                      <span className="font-semibold text-green-600">
                        ₹{vehicle.balance || "0"}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        router.push(
                          `/recharge?vehicle=${vehicle.vehicleNumber}`
                        )
                      }
                      className="flex-1 bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold  px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg py-2 text-sm"
                    >
                      Recharge
                    </button>
                    <button
                      onClick={() => deleteVehicle(vehicle.id)}
                      className="bg-red-50 text-red-600 hover:bg-red-100 p-2 rounded-lg transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
