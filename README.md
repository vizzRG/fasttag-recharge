# 🚗 FASTag Recharge Website + PWA App

A modern, responsive FASTag recharge platform built with Next.js 16 that works seamlessly as both a website and a Progressive Web App (PWA). Users can manage multiple vehicles, recharge FASTags instantly, and track transaction history.

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.0-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- ✅ **User Authentication** - Login & Registration system
- ✅ **Vehicle Management** - Add, view, and manage multiple vehicles
- ✅ **Quick Recharge** - Fast FASTag recharge with multiple payment options
- ✅ **Transaction History** - Track all your recharge transactions
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ✅ **PWA Support** - Install as mobile app on Android/iOS
- ✅ **Modern UI** - Clean and intuitive interface with Tailwind CSS
- ✅ **Local Storage** - Data persistence without backend
- ✅ **Real-time Updates** - Instant balance updates
- ✅ **Multiple Payment Methods** - UPI, Cards, Net Banking support

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Frontend:** React 19.2.0
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Storage:** Browser LocalStorage
- **PWA:** Web App Manifest + Service Worker Ready

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git** - [Download](https://git-scm.com/)

To check if you have Node.js and npm installed:

```bash
node --version
npm --version
```

## System Requirements

- OS: Windows 10/11, macOS 10.15+, or Linux
- RAM: 4GB minimum (8GB recommended)
- Disk Space: 500MB free space
- Browser: Chrome, Firefox, Safari, or Edge (latest versions)

## 🚀 Installation & Setup

Follow these step-by-step instructions to get the project running on your local machine:

### Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/vizzRG/fasttag-recharge.git

# Navigate to project directory
cd fastag-recharge
```

Or download the ZIP file and extract it.

### Step 2: Install Dependencies

Choose your preferred package manager:

Using npm:

```
npm install
```

Using yarn:

```bash
yarn install
```

Using pnpm:

```
pnpm install
```

This will install all required dependencies listed in package.json.

## 📱 Running the Application

### Development Mode

## Start the development server:

```Bash
npm run dev
```

Or with other package managers:

```Bash
yarn dev
#or
pnpm dev
```

Open your browser and navigate to:

- Local: http://localhost:3000

## Production Mode

Build and run the production version:

```Bash
# Build the application
npm run build

# Start production server
npm start
```

## 🎯 Usage Guide

### Complete User Flow

1. SignUp/Login

- SingUp New Account:

  1. Fill in the registration form:

  - Full Name (e.g., "John Doe")
  - Email Address (e.g., "john@example.com")
  - Phone Number (e.g., "+91 9876543210")
  - Password
  - Confirm Password
  - Accept Terms & Conditions
  - Click "Create Account"
  - You'll be redirected to the dashboard

- Login to Existing Account:

  - Enter your email and password
  - Optionally check "Remember me"
  - Click "Login"

2. Add Vehicles

   - Go to "My Vehicles" from the dashboard or navigation

   - Click "Add Vehicle" button
   - Fill in vehicle details:
   - Vehicle Number: e.g., "MH 01 AB 1234"
   - Vehicle Type: Select from dropdown (Car, SUV, Bike, Truck, Bus)
   - FASTag ID: Your FASTag identification number
   - Bank Name: Select issuing bank
   - Click "Add Vehicle"
   - Vehicle card will appear with:
     - Vehicle number
     - Type
     - FASTag ID
     - Current balance
     - Quick recharge button

3. Recharge FASTag

- Method 1: From Dashboard

  - Click "Quick Recharge" card
  - Select vehicle from dropdown
  - Choose amount and payment method
  - Complete recharge

- Method 2: From Vehicle Card

  - Find your vehicle
  - Click "Recharge Now" button
  - Vehicle is pre-selected

- - Recharge Steps:

  - Select Vehicle:
    - Choose from your saved vehicles
  - Choose Amount:
    - Quick select: ₹200, ₹300, ₹500, ₹1000, ₹2000, ₹5000
  - Or enter custom amount (minimum ₹100)
  - Select Payment Method:
    - UPI (Google Pay, PhonePe, Paytm)
    - Debit/Credit Card
    - Net Banking
  - Review Summary: Check details in sidebar
  - Click "Proceed to Pay"
  - Processing: Wait for confirmation (2 seconds simulation)
  - Success: View transaction details
