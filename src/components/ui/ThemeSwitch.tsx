'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) {
    return null;
  }

  if (resolvedTheme === 'dark') {
    return (<div className="cursor-pointer"><FiSun size={30} onClick={() => setTheme('light')} /></div>)
  }

  if (resolvedTheme === 'light') {
    return (<div className="cursor-pointer"><FiMoon size={30} onClick={() => setTheme('dark')} /></div>)
  }
}
