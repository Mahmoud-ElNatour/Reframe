import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const sendMessage = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/collaboration-requests", data),
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We will get back to you shortly.",
      });
      reset();
    },
    onError: (error: any) => {
      toast({
        title: "Submission failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => sendMessage.mutate(data);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-neutral mb-8">Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-2xl shadow">
            <div>
              <label className="block text-sm font-medium text-neutral mb-2">Name *</label>
              <input {...register("name")} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral mb-2">Email *</label>
              <input type="email" {...register("email")} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral mb-2">Message *</label>
              <textarea rows={5} {...register("message")} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none" />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <button type="submit" disabled={sendMessage.isPending} className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors disabled:opacity-50">
              {sendMessage.isPending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
