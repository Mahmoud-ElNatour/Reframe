import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeToNewsletter = useMutation({
    mutationFn: (email: string) => apiRequest("POST", "/api/newsletter/subscribe", { email }),
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter. Stay tuned for exclusive updates!",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscribeToNewsletter.mutate(email);
    }
  };

  return (
    <section className="py-16 bg-gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for exclusive updates, expert tips, and the latest news on our workshops and events.
            </p>
            
            {/* Newsletter Signup */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg text-neutral focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <button 
                type="submit" 
                disabled={subscribeToNewsletter.isPending}
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {subscribeToNewsletter.isPending ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>
            
            <p className="text-sm text-blue-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>

          <div className="text-center lg:text-right">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-end">
                <i className="fas fa-map-marker-alt mr-3"></i>
                <span>Beirut, Lebanon</span>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <i className="fas fa-phone mr-3"></i>
                <span>+961 1 234 567</span>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <i className="fas fa-envelope mr-3"></i>
                <span>info@reframemhs.com</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <p className="text-lg font-semibold mb-4">Follow Us</p>
              <div className="flex justify-center lg:justify-end space-x-4">
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
