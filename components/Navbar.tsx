'use client' // this is a client component
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll/modules'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { NAV_ITEMS } from 'data/data'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? 'dark' : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-background dark:text-primaryAccent dark:border-b dark:border-primaryAccent">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2 cursor-pointer">
                <span className="text-primaryAccent ml-1 text-4xl"> {'{'}</span>

                <h2 className="text-4xl font-bold text-black dark:text-white ">
                  J
                </h2>
                <span className="text-primaryAccent mr-1 text-4xl">{'}'}</span>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 dark:text-primaryAccent rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      'block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-primaryAccent cursor-pointer '
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              {currentTheme === 'dark' ? (
                <button
                  onClick={() => setTheme('light')}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <DarkModeOutlinedIcon />
                </button>
              ) : (
                <button
                  onClick={() => setTheme('dark')}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <LightModeOutlinedIcon />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
