import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import NewsletterSection from "@/components/newsletter-section";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-neutral mb-4">About Us</h1>
            <p className="text-gray-700">We are a team of mental health professionals dedicated to providing culturally relevant services across the Middle East.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Core Values</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Integrity</li>
              <li>Compassion</li>
              <li>Collaboration</li>
              <li>Innovation</li>
            </ul>
          </div>
        </div>
      </section>
      <NewsletterSection />
      <Footer />
    </div>
  );
}
