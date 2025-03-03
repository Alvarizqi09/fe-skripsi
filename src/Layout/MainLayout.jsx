import { Header } from "./Header";
import { Footer } from "./Footer";

// eslint-disable-next-line react/prop-types
export function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
