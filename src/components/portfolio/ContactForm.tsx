import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";

const YOUR_EMAIL = "youremail@example.com"; // TODO: Replace with your email

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "Unknown"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <GlassCard className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground">Your name</label>
            <Input
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Email</label>
            <Input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Message</label>
          <Textarea
            placeholder="Hi! I'd love to connect about..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <Button type="submit" variant="hero">Send Email</Button>
          <Button asChild variant="glass">
            {/* TODO: Replace social links below */}
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noreferrer">LinkedIn</a>
          </Button>
          <Button asChild variant="glass">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/resume.pdf" download>Download Resume</a>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
};

export default ContactForm;
