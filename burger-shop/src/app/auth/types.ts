// Send data on server 
export interface LogInRequest {
    login: string,
    password: string,
    email: string
}

// Get token from server
export interface LogInResponse {
    accessToken: string,
    message: string,
    success: boolean
}