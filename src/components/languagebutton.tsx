"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  const [language, setLanguage] = useState<"english" | "arabic">("english")

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "arabic" : "english")
  }

  return <Button onClick={toggleLanguage}>{language === "english" ? "عربي" : "English"}</Button>
}
