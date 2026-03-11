'use server'

import { verifyRecaptchaTokenCore } from './recaptcha'

export async function getContactInformation(recaptchaToken: string) {
    // Validate input
    if (!recaptchaToken || typeof recaptchaToken !== 'string') {
        throw new Error('Invalid recaptcha token')
    }

    // Verify recaptcha
    const success = await verifyRecaptchaTokenCore(recaptchaToken)

    if (!success) {
        return {
            recaptchaSuccess: false,
        }
    }

    // Return contact information
    return {
        recaptchaSuccess: true,
        contactInformation: {
            phoneNumber: '+48 503 536 506',
            email: 'turek1992@o2.pl',
            linkedIn: 'https://www.linkedin.com/in/michał-turczyn-6851a2117/',
            stackOverflow:
                'https://stackoverflow.com/users/7132550/michał-turczyn',
            github: 'https://github.com/mturczyn',
        },
    }
}
