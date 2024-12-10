'use client'
import { Button } from '@covision/elements/atoms'
import { cn } from '@covision/elements/lib'
import { CookieIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function CookieConsent({
  variant = 'default',
  demo = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [hide, setHide] = useState(false)

  const accept = () => {
    setIsOpen(false)
    document.cookie =
      'cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT'
    setTimeout(() => {
      setHide(true)
    }, 700)
    onAcceptCallback()
  }

  const decline = () => {
    setIsOpen(false)
    setTimeout(() => {
      setHide(true)
    }, 700)
    onDeclineCallback()
  }

  useEffect(() => {
    try {
      setIsOpen(true)
      if (document.cookie.includes('cookieConsent=true')) {
        if (!demo) {
          setIsOpen(false)
          setTimeout(() => {
            setHide(true)
          }, 700)
        }
      }
    } catch (e) {
      // console.log("Error: ", e);
    }
  }, [demo])

  return variant !== 'small' ? (
    <div
      className={cn(
        'fixed right-0 bottom-0 left-0 z-[200] w-full duration-700 sm:bottom-4 sm:left-4 sm:max-w-md',
        isOpen
          ? 'translate-y-0 opacity-100 transition-[opacity,transform]'
          : 'translate-y-8 opacity-0 transition-[opacity,transform]',
        hide && 'hidden'
      )}
    >
      <div className="m-3 rounded-md border border-border bg-background shadow-lg dark:bg-card">
        <div className="grid gap-2">
          <div className="flex h-14 items-center justify-between border-border border-b p-4">
            <h1 className="font-medium text-lg">We use cookies</h1>
            <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
          </div>
          <div className="p-4">
            <p className="text-start font-normal text-sm">
              We use cookies to ensure you get the best experience on our
              website. For more information on how we use cookies, please see
              our cookie policy.
              <br />
              <br />
              <span className="text-xs">
                By clicking "
                <span className="font-medium opacity-80">Accept</span>
                ", you agree to our use of cookies.
              </span>
              <br />
              <a href="/#" className="text-xs underline">
                Learn more.
              </a>
            </p>
          </div>
          <div className="flex gap-2 border-border border-t p-4 py-5 dark:bg-background/20">
            <Button onClick={accept} className="w-full">
              Accept
            </Button>
            <Button onClick={decline} className="w-full" variant="secondary">
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={cn(
        'fixed right-0 bottom-0 left-0 z-[200] w-full duration-700 sm:bottom-4 sm:left-4 sm:max-w-md',
        isOpen
          ? 'translate-y-0 opacity-100 transition-[opacity,transform]'
          : 'translate-y-8 opacity-0 transition-[opacity,transform]',
        hide && 'hidden'
      )}
    >
      <div className="m-3 rounded-lg border border-border bg-background dark:bg-card">
        <div className="flex items-center justify-between p-3">
          <h1 className="font-medium text-lg">We use cookies</h1>
          <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
        </div>
        <div className="-mt-2 p-3">
          <p className="text-left text-muted-foreground text-sm">
            We use cookies to ensure you get the best experience on our website.
            For more information on how we use cookies, please see our cookie
            policy.
          </p>
        </div>
        <div className="mt-2 flex items-center gap-2 border-t p-3">
          <Button onClick={accept} className="h-9 w-full rounded-full">
            accept
          </Button>
          <Button
            onClick={decline}
            className="h-9 w-full rounded-full"
            variant="outline"
          >
            decline
          </Button>
        </div>
      </div>
    </div>
  )
}
