import { Send } from "lucide-react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset(); // Reset form after submission
  };

  return (
    <div className="bg-card p-8 rounded-lg shadow-xs max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block mb-2 text-sm font-medium text-muted-foreground">Your Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 bg-background rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block mb-1 text-sm font-medium text-muted-foreground">Your Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
            className="w-full p-2  bg-background rounded-md  border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="example@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label className="block mb-1 text-sm font-medium text-muted-foreground">Your Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full p-2  bg-background  rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Write your message here..."
            rows={4}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="cosmic-button w-full flex items-center justify-center gap-2"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send size={18}/>
        </button>

        {/* Success Message */}
        {isSubmitSuccessful && (
          <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>
        )}
      </form>
    </div>
  );
}
