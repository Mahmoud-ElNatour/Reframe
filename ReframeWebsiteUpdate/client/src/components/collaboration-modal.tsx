import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const collaborationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  country: z.string().optional(),
  organization: z.string().optional(),
  position: z.string().optional(),
  message: z.string().min(10, "Please provide more details about the collaboration"),
});

type CollaborationFormData = z.infer<typeof collaborationSchema>;

export default function CollaborationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CollaborationFormData>({
    resolver: zodResolver(collaborationSchema),
  });

  const submitCollaboration = useMutation({
    mutationFn: (data: CollaborationFormData) => 
      apiRequest("POST", "/api/collaboration-requests", data),
    onSuccess: () => {
      toast({
        title: "Collaboration request submitted!",
        description: "Thank you for your interest in collaborating with us! We will contact you soon.",
      });
      reset();
      setIsOpen(false);
    },
    onError: (error: any) => {
      toast({
        title: "Submission failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: CollaborationFormData) => {
    submitCollaboration.mutate(data);
  };

  // Listen for global events to open modal
  useState(() => {
    const handleShowModal = () => setIsOpen(true);
    window.addEventListener('showCollaborationModal', handleShowModal);
    return () => window.removeEventListener('showCollaborationModal', handleShowModal);
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-neutral">Mental Health Lab Collaboration</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <p className="text-gray-600 mb-8">
            We're excited about the possibility of collaborating with you! Please fill out the form below and let us know how we can work together.
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral mb-2">Name *</label>
                <input 
                  {...register("name")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral mb-2">Email *</label>
                <input 
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral mb-2">Phone Number</label>
                <input 
                  type="tel"
                  {...register("phone")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral mb-2">Country</label>
                <select 
                  {...register("country")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                >
                  <option value="">Select Country</option>
                  <option value="lebanon">Lebanon</option>
                  <option value="jordan">Jordan</option>
                  <option value="syria">Syria</option>
                  <option value="palestine">Palestine</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral mb-2">Company/Organization</label>
                <input 
                  {...register("organization")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral mb-2">Title/Position</label>
                <input 
                  {...register("position")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral mb-2">How can we collaborate together? *</label>
              <textarea 
                rows={5} 
                placeholder="Please let us know how we can collaborate together..." 
                {...register("message")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            
            <div className="flex gap-4">
              <button 
                type="submit" 
                disabled={submitCollaboration.isPending}
                className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors flex-1 disabled:opacity-50"
              >
                {submitCollaboration.isPending ? 'Submitting...' : 'Submit Collaboration Request'}
              </button>
              <button 
                type="button" 
                onClick={() => setIsOpen(false)}
                className="border border-gray-300 text-neutral px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
