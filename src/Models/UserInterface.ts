export default interface UserInterface {
    id?: number;
    username: string;
    password: string;
    token: string;
    role: string;
    email: string;
    created_at: string;
    updated_at?: string;
}
