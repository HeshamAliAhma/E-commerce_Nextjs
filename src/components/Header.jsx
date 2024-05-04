"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../context/CartContext";
import CartAPIs from "../utils/cartAPIs";
import Cart from "./Cart";



const Links = [
  { path: "/", title: "Home" },
  { path: "/Explore", title: "Explore" },
  { path: "/Projects", title: "Projects" },
  { path: "/About_Us", title: "About Us" },
  { path: "/Contact_Us", title: "Contact Us" },
];

function Header() {
  const [Loggedin,setLoggedin] = useState();
  const [open,setOpen] = useState(false);
  useEffect(() => {
    setLoggedin(window.location.href.toString().includes('sign-in'))
  },[])
  const { user } = useUser();
  const path = usePathname();
  const {cart,setCart} = useContext(CartContext);
useEffect(() => {
  user&&getCartItems();
},[user])
    const getCartItems = () => {
      CartAPIs.getUserCartitems(user.primaryEmailAddress.emailAddress).then((res) => {
        console.log('resonse from cart items'+res?.data?.data)
        res?.data?.data.forEach(cartItem=>{
          setCart((oldCart)=>[
            ...oldCart,
            {
              id:cartItem.id,
              product:cartItem?.attributes?.products?.data
            }
          ])
        })
      })
    }
  return (
    !Loggedin && (
      <header className="bg-white shadow-md">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Image src={"/logo.svg"} alt="logo" width={50} height={50} />

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {Links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`text-gray-500 transition hover:text-primaryHover ${
                        path === link.path ? "text-primary" : ""
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primaryHover"
                    href={"/sign-in"}
                  >
                    Login
                  </Link>

                  <Link
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primaryHover sm:block"
                    href={"/sign-up"}
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div className="flex items-center gap-4" onClick={() => setOpen(!open)}>
                  <h2 className="cursor-pointer flex items-center">
                  <CiShoppingCart className="text-3xl"   />
                  (
                    <span className="text-primary font-bold">
                    {cart?.length}
                    </span>
                    )
                  </h2>
                  <UserButton afterSignOutUrl="/"/>
                  {open && <Cart/>}
                </div>
              )}

              <button className="block rounded bg-gray-100 p-2.5 text-primary transition hover:primaryHover md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  );
}

export default Header;
