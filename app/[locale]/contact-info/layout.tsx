import { recaptchaScriptId } from '@/utils/recaptcha.client'
import Script from 'next/script'
import { PropsWithChildren } from 'react'

export default function ContactInfoLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Script
                id={recaptchaScriptId}
                src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                async
                defer
            />
            {children}
        </>
    )
}
