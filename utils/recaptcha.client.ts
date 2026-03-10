'use client'

export const recaptchaScriptId = 'recaptcha-script'

export async function getRecaptchaToken(action: string): Promise<string> {
    // This runs on client, so it will fail on server
    if (typeof window === 'undefined') {
        throw new Error('getRecaptchaToken must be called from client-side')
    }

    await waitForRecaptchaScriptLoad()

    if (!(window as any)?.grecaptcha?.enterprise) {
        throw new Error('reCAPTCHA not available')
    }

    const token = await new Promise<string>((resolve) => {
        ;(window as any).grecaptcha.enterprise.ready(async () => {
            resolve(
                await (window as any).grecaptcha.enterprise.execute(
                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                    { action }
                )
            )
        })
    })

    return token
}

function waitForRecaptchaScriptLoad(): Promise<void> {
    return new Promise((resolve, reject) => {
        if ((window as any)?.grecaptcha?.enterprise) {
            resolve()
            return
        }

        const script = document.getElementById(
            recaptchaScriptId
        ) as HTMLScriptElement

        if (!script) {
            reject(
                new Error(
                    "reCAPTCHA script element not found. Make sure it's defined in route head."
                )
            )
            return
        }

        script.addEventListener('load', () => {
            resolve()
        })
    })
}
