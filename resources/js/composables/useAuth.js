import http from 'axios';
import { setToken, removeToken } from './Token';
import { useAuthStore } from '../stores/auth';

export function useAuth() {
    const authStore = useAuthStore();

    const login = async (formData) => {
        try {
            const response = await http.post('api/login', formData);
            const { authorisation: token, user } = response.data;

            if (token) {
                setToken(token);
                authStore.setUser(user);
                return { success: true, user };
            } else {
                console.error('Token not received');
                return { success: false };
            }
        } catch (error) {
            console.error('Login failed', error);
            return { success: false, error };
        }
    };

    const logout = () => {
        removeToken();
        authStore.clearUser();
    };

    return { login, logout };
}
