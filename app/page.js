import Image from "next/image";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./(pages)/home/page";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
     <Home />
    </div>
  );
}