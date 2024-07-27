import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "../providers/AuthProvider";

const queryClient = new QueryClient();

const Wrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
};

export default Wrapper;
