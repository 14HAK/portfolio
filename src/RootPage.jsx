import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function RootPage() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </QueryClientProvider>
    </>
  );
}

export default RootPage;
