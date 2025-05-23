export interface User {
    userName: string;
    phone: string;
    email: string;
    password:string;
    hasCar: boolean;
    driveringLicense?: string;
    gender: string;

}
export interface RegisterUser{
    userName: string;
    phone: string;
    email: string;
    hasCar?: boolean;
    driveringLicense: string;
    gender: string;
}
export interface LoginCredentials {
    email: string;
    password: string;
}

