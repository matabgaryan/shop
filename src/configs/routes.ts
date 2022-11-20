export const ROUTES = {
    accessDenied: '/access-denied',
    shop: '/products',
    home: '/',
    adminDashboard: '/admin/dashboard',
    adminProducts: '/admin/products',
    adminLogin: '/admin/login',
    createProduct: '/admin/products/create',
    notFound: '/not-found'
}

export const appNavbarRoutes = [
    {name: 'Home', path: '/'},
    {name: 'Products', path: '/products'}
]

export const adminNavbarRoutes = [
    {name: 'Dashboard', path: '/admin/dashboard'},
    {name: 'Admin Products', path: '/admin/products'},
]
