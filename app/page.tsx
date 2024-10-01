"use client"

import Particles from "@/components/ui/particles";
import Profile from "@/app/ui/Profile"
import Header from "@/app/ui/Header"
import Projects from '@/app/ui/Projects';
import Home from '@/app/ui/Home';
export default function MinimalPortfolio() {
  const color = "#ffffff";

  return (
    <div className=" min-h-screen  text-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <svg preserveAspectRatio="xMidYMid slice" id="visual" viewBox="0 0 900 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#001220"></rect><defs><linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%"><stop offset="20%" stop-color="#0a1d3a" stop-opacity="1"></stop><stop offset="80%" stop-color="#0a1d3a" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_1" x1="33.3%" y1="0%" x2="100%" y2="100%"><stop offset="20%" stop-color="#0a1d3a" stop-opacity="1"></stop><stop offset="80%" stop-color="#051a31" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_2" x1="33.3%" y1="0%" x2="100%" y2="100%"><stop offset="20%" stop-color="#031629" stop-opacity="1"></stop><stop offset="80%" stop-color="#051a31" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_3" x1="33.3%" y1="0%" x2="100%" y2="100%"><stop offset="20%" stop-color="#031629" stop-opacity="1"></stop><stop offset="80%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stop-color="#0a1d3a" stop-opacity="1"></stop><stop offset="80%" stop-color="#0a1d3a" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_1" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stop-color="#051a31" stop-opacity="1"></stop><stop offset="80%" stop-color="#0a1d3a" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_2" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stop-color="#051a31" stop-opacity="1"></stop><stop offset="80%" stop-color="#031629" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_3" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stop-color="#001220" stop-opacity="1"></stop><stop offset="80%" stop-color="#031629" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(900, 0)"><path d="M0 324.5C-34 295 -68 265.6 -102.9 248.5C-137.8 231.5 -173.6 226.9 -209.3 209.3C-245 191.7 -280.6 161.2 -299.8 124.2C-319 87.1 -321.7 43.6 -324.5 0L0 0Z" fill="#011424"></path><path d="M0 243.4C-25.5 221.3 -51 199.2 -77.2 186.4C-103.4 173.6 -130.2 170.2 -157 157C-183.7 143.8 -210.5 120.9 -224.8 93.1C-239.2 65.4 -241.3 32.7 -243.4 0L0 0Z" fill="#03182d"></path><path d="M0 162.2C-17 147.5 -34 132.8 -51.5 124.3C-68.9 115.7 -86.8 113.4 -104.7 104.7C-122.5 95.9 -140.3 80.6 -149.9 62.1C-159.5 43.6 -160.9 21.8 -162.2 0L0 0Z" fill="#071b36"></path><path d="M0 81.1C-8.5 73.8 -17 66.4 -25.7 62.1C-34.5 57.9 -43.4 56.7 -52.3 52.3C-61.2 47.9 -70.2 40.3 -74.9 31C-79.7 21.8 -80.4 10.9 -81.1 0L0 0Z" fill="#0a1d3a"></path></g><g transform="translate(0, 600)"><path d="M0 -324.5C36.6 -307.1 73.2 -289.8 114.8 -277.2C156.4 -264.6 202.8 -256.7 229.5 -229.5C256.1 -202.2 262.8 -155.5 275.3 -114C287.8 -72.6 306.2 -36.3 324.5 0L0 0Z" fill="#011424"></path><path d="M0 -243.4C27.5 -230.4 54.9 -217.3 86.1 -207.9C117.3 -198.4 152.1 -192.5 172.1 -172.1C192 -151.6 197.1 -116.6 206.5 -85.5C215.9 -54.4 229.6 -27.2 243.4 0L0 0Z" fill="#03182d"></path><path d="M0 -162.2C18.3 -153.6 36.6 -144.9 57.4 -138.6C78.2 -132.3 101.4 -128.4 114.7 -114.7C128 -101.1 131.4 -77.8 137.7 -57C143.9 -36.3 153.1 -18.1 162.2 0L0 0Z" fill="#071b36"></path><path d="M0 -81.1C9.2 -76.8 18.3 -72.4 28.7 -69.3C39.1 -66.1 50.7 -64.2 57.4 -57.4C64 -50.5 65.7 -38.9 68.8 -28.5C72 -18.1 76.5 -9.1 81.1 0L0 0Z" fill="#0a1d3a"></path></g></svg>
      </div>
      <Particles
        className="fixed inset-0 z-10"
        quantity={30}
        ease={100}
        color={color}
      />
      <Header />
      <main className="px-8 md:px-16 lg:px-24">
        <Home/>
        <Profile />
        <Projects />
      </main>
    </div>
  )
}
