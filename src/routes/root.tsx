import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Wrapper } from "../common/styles";

const queryClient = new QueryClient();

const Root = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navigation />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </QueryClientProvider>
    </>
  );
};

export default Root;
