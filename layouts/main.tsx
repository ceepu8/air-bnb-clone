import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { LayoutProps } from "@/interfaces/index";

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
