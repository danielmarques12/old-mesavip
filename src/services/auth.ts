const token_key = 'token';
export const isAuthenticated = () =>
  typeof window !== 'undefined' ? localStorage.getItem(token_key) : '';

export const getToken = () =>
  typeof window !== 'undefined' ? localStorage.getItem(token_key) : '';

export const setToken = (token: string) =>
  typeof window !== 'undefined' ? localStorage.setItem(token_key, token) : '';

export const signOut = () => {
  typeof window !== 'undefined' ? localStorage.removeItem(token_key) : '';
};
