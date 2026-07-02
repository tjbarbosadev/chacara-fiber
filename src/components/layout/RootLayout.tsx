import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export function RootLayout() {
  return (
    <div className="bg-surface-50 text-navy-950 dark:bg-navy-950 min-h-screen font-sans transition-colors duration-300 dark:text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
