import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl font-bold text-neutral">Contact Us</h1>
          <p className="text-gray-700">Reach out for collaboration or inquiries.</p>
          <div className="space-y-2 text-gray-700">
            <p><i className="fas fa-map-marker-alt mr-2"></i>Beirut, Lebanon</p>
            <p><i className="fas fa-phone mr-2"></i>+961 1 234 567</p>
            <p><i className="fas fa-envelope mr-2"></i>info@reframemhs.com</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
