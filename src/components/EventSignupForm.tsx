import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2 } from "lucide-react";

const EventSignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    discord: "",
    comments: ""
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
          access_key: "9b833ba6-5cd5-448d-b840-585a38fcb3ae",
          subject: "New Event Signup - AI Demo & Learn",
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try joining our Discord instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-4">
        <CheckCircle className="h-16 w-16 mx-auto text-success mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          You're Registered! 🎉
        </h3>
        <p className="text-muted-foreground mb-2">
          We've received your registration! We'll add you to the event invite shortly and you'll receive a calendar invite with the Zoom link via email.
        </p>
        <p className="text-sm text-muted-foreground">
          Join our Discord for updates and to chat with other attendees!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="event-firstName">First Name *</Label>
          <Input
            id="event-firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="event-lastName">Last Name *</Label>
          <Input
            id="event-lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="event-email">Email *</Label>
        <Input
          id="event-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="event-discord">
          Discord Username <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="event-discord"
          name="discord"
          value={formData.discord}
          onChange={handleChange}
          placeholder="username#1234"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="event-comments">
          Comments / Questions <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Textarea
          id="event-comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Any questions or comments you'd like to share?"
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
            Registering...
          </>
        ) : (
          "Register for Events"
        )}
      </Button>
    </form>
  );
};

export default EventSignupForm;
