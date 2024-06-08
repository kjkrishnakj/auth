import Image from "next/image";
import { Inter } from "next/font/google";
import Signup from "./signup";
import Login from "./login";
import Navbar from "@/components/Navbar";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (<>
     <Login/>
  </>
  );
}
