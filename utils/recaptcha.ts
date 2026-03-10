'use server'

// Server Action - can be called directly from client components
export async function verifyRecaptchaToken(recaptchaToken: string) {
    if (!recaptchaToken || typeof recaptchaToken !== 'string') {
        throw new Error('Invalid recaptcha token')
    }

    const ok = await verifyRecaptchaTokenCore(recaptchaToken)
    return { ok }
}

export async function verifyRecaptchaTokenCore(recaptchaToken: string) {
    const secret = process.env.RECAPTCHA_SECRET_KEY!
    const params = new URLSearchParams()

    params.append('secret', secret)
    params.append('response', recaptchaToken)

    const verifyRes = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
            method: 'POST',
            body: params,
        }
    )
    const { success, score } = await verifyRes.json()

    const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE || '0.7')

    return success && score && score >= minScore
}
