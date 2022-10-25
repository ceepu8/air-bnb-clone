import Footer from '@/components/combination/Footer';
import Header from '@/components/combination/Header';
import { LayoutProps } from '@/interfaces/index';

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
