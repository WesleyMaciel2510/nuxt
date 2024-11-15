export const useAuth = () => {
  const isAuthenticated = ref(true);
  return { isAuthenticated };
};
