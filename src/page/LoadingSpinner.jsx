import { Loader } from "lucide-react";
export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader className="animate-spin" />
    </div>
  );
}
