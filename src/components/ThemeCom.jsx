"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export default function ThemeCom({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      {/* <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300"> */}
      <div className="min-h-screen transition-colors duration-300 select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
