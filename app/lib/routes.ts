export interface AppRoute {
    name: string
    path: string
}

export const appRoutes: AppRoute[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Contact info',
        path: '/contact-info',
    },
    {
        name: 'Technology stack',
        path: '/technology-stack',
    },
]
