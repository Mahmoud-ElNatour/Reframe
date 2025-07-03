import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ServicesOverview from "@/components/services-overview";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <ServicesOverview />
      <Footer />
    </div>
  );
}
