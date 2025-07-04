import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function TechnicalConsultation() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl font-bold text-neutral">Technical Consultation & Support</h1>
          <p className="text-gray-700">Professional guidance for corporations and NGOs implementing mental health programs and policies.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
