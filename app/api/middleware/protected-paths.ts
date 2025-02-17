export const PROTECTED_PATHS = {
    AUTH_REQUIRED: [
        '/api/users/',
        '/api/profile',
        '/api/orders',
        '/api/payments',
        '/api/bookings'
    ],
    ADMIN_ONLY: [
        '/api/admin',
        '/api/settings',
        '/api/reports',
        '/api/analytics'
    ],
    MANAGER_ONLY: [
        '/api/staff',
        '/api/schedules',
        '/api/departments'
    ],
    PUBLIC: [
        '/api/public',
        '/api/blog',
        '/api/careers'
    ]
}
