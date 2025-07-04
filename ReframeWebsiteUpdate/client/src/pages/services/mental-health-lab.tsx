import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CollaborationModal from "@/components/collaboration-modal";

export default function MentalHealthLab() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl font-bold text-neutral">Mental Health Lab</h1>
          <p className="text-gray-700">Learn more about our research projects and download related documents.</p>
          <button
            onClick={() => window.dispatchEvent(new Event('showCollaborationModal'))}
            className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold"
          >
            Collaborate With Us
          </button>
        </div>
      </section>
      <CollaborationModal />
      <Footer />
    </div>
  );
}
