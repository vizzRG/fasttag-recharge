import { Suspense } from "react";
import Recharge from "./_component/Recharge";
export default function Page() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-white"></div>}>
      <Recharge />
    </Suspense>
  );
}
