import { Suspense } from "react";
import { LoaderCircle } from "lucide-react";
import Recharge from "./_component/Recharge";
export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center ">
          <LoaderCircle width={400} height={400} color="white" />
        </div>
      }
    >
      <Recharge />
    </Suspense>
  );
}
