import Image from "next/image";
import CatComponent from "./cat-component";
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen" >
      <CatComponent />
    </div>
  );
}
