"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "cookie-consent"

type ConsentValue = "accepted" | "declined"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      setIsVisible(true)
    }
  }, [])

  const handleChoice = (value: ConsentValue) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value)
    }
    setIsVisible(false)
  }

  const handleChangePreferences = () => {
    setIsVisible(true)
  }

  if (!isVisible) return null

  return (
    <div
      className="
        fixed inset-x-0 bottom-0 z-50 flex justify-center
        px-4 pb-4
        sm:px-6 sm:pb-6
        lg:justify-end lg:pr-10 lg:pb-8
      "
    >
      <div className="w-full max-w-4xl rounded-2xl border bg-background/95 p-6 shadow-lg backdrop-blur lg:max-w-xl">
        <h2 className="text-xl font-semibold">We use cookies</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          We use cookies and other tracking technologies to improve your browsing experience on our
          website, to show you personalized content and targeted ads, to analyze our website
          traffic, and to understand where our visitors are coming from.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-1 flex-col gap-3 sm:flex-row">
            <Button
              className="w-full sm:w-auto bg-white text-black hover:bg-white/90"
              onClick={() => handleChoice("accepted")}
            >
              I agree
            </Button>

            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => handleChoice("declined")}
            >
              I decline
            </Button>
          </div>

          <button
            type="button"
            onClick={handleChangePreferences}
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Change my preferences
          </button>
        </div>
      </div>
    </div>
  )
}
