const ENDPOINTS = {
    AUTH: {
        //? TOKEN 
        LOGIN: '/login',
        LOGOUT: '/logout',
        REGISTRATION: '/registration',
        PROFILE: '/profile',
        REFRESH: '/refresh',
        RESETPASSWORD: '/reset_password',
        CHANGEPASSWORD: '/change_password',

        //? ORDERS
        INGREDIENTS: '/ingredients',
        PRIVATE: '/private',
        ADDORDER: '/add_order',
        ORDERS: '/user_orders'
    }
}

export default ENDPOINTS;