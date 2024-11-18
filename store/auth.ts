import { ref } from 'vue';
import axios from 'axios';

export const useAuth = () => {
  const isAuthenticated = ref(false);

  // Function to log the user in
  const login = async (userData: { username: string; password: string }) => {
    try {
      // Send login request to the backend API
      const response = await axios.post('http://localhost:3333/auth/login', {
        username: userData.username,
        password: userData.password,
      });

      // Handle the response and store authentication state
      if (response.data /* && response.data.token */) {
        isAuthenticated.value = true;
        // Optionally store token in localStorage or cookies
        localStorage.setItem('auth_token', response.data.token);
        return true;
      } else {
        throw new Error('Authentication failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      isAuthenticated.value = false;
      return false;
    }
  };

  // Function to log the user out
  const logout = () => {
    isAuthenticated.value = false;
    // Optionally clear token from localStorage or cookies
    localStorage.removeItem('auth_token');
  };

  return { isAuthenticated, login, logout };
};
