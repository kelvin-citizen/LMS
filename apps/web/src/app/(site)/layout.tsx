import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

// Public website shell: shared navbar and footer for every marketing page.
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
