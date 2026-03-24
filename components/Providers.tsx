'use client' // Mark this as a Client Component

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { I18nProvider, I18nProviderProps } from 'next-i18next/client'
import { PropsWithChildren } from 'react'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export function Providers({
    children,
    language,
    resources,
}: PropsWithChildren & I18nProviderProps) {
    return (
        <I18nProvider language={language} resources={resources}>
            <QueryClientProvider client={queryClient}>
                {children}
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </QueryClientProvider>
        </I18nProvider>
    )
}
