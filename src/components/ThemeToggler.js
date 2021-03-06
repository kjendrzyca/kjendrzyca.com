import React from 'react'
import useDarkMode from 'use-dark-mode'
import { Sun, Moon } from './Icons'

const ThemeToggler = () => {
  const darkMode = useDarkMode()

  return (
    <button
      className="theme-toggler-button"
      type="button"
      onClick={darkMode.toggle}
      aria-label={
        darkMode.value ? 'Switch to light mode' : 'Switch to dark mode'
      }
    >
      {darkMode.value ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </button>
  )
}

export default ThemeToggler
