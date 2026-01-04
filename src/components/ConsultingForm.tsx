import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2 } from "lucide-react";

const ConsultingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "43daa875-466a-4657-8441-e68a6098fe6d",
          subject: "New Consulting Inquiry from AI Demo & Learn",
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again or contact us on Discord.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-4">
        <CheckCircle className="h-16 w-16 mx-auto text-success mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Thank You! 🎉
        </h3>
        <p className="text-muted-foreground mb-2">
          We've received your inquiry and will get back to you within 24-48 hours.
        </p>
        <p className="text-sm text-muted-foreground">
          Feel free to join our Discord while you wait!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="consulting-firstName">First Name *</Label>
          <Input
            id="consulting-firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="consulting-lastName">Last Name *</Label>
          <Input
            id="consulting-lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="consulting-email">Email *</Label>
        <Input
          id="consulting-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="consulting-description">Project Description *</Label>
        <Textarea
          id="consulting-description"
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
          rows={4}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Inquiry"
        )}
      </Button>
    </form>
  );
};

export default ConsultingForm;
