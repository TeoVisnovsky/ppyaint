import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(data?.error || "We couldn't send your message. Please try again later.");
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "We couldn't send your message. Please try again.";
      const isNetworkError = errorMessage.includes("Failed to fetch") || errorMessage.includes("ERR_CONNECTION");
      
      toast({
        variant: "destructive",
        title: isNetworkError ? "Connection issue" : "Something went wrong",
        description: isNetworkError 
          ? "Unable to reach the server. Please check your connection and try again."
          : errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-papaya-light">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-extrabold text-primary uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2 text-foreground">Let's Connect</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Have a question, idea, or want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div>
              <Input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="rounded-2xl bg-card border-border h-13 text-base"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="rounded-2xl bg-card border-border h-13 text-base"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Textarea
                placeholder="Your message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="rounded-2xl bg-card border-border resize-none text-base"
                disabled={isSubmitting}
              />
            </div>
            <Button variant="default" size="lg" type="submit" disabled={isSubmitting} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
              {isSubmitting ? "Sending" : "Send Message"} <Send className="ml-1 w-4 h-4" />
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-extrabold text-foreground">Email</h4>
                <a
                  href="mailto:papayainternational.bratislava@gmail.com"
                  className="text-muted-foreground underline-offset-2 hover:text-primary transition-colors"
                >
                  papayainternational.bratislava@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-extrabold text-foreground">Location</h4>
                <p className="text-muted-foreground">Bratislava, Slovakia</p>
              </div>
            </div>

            <div>
              <h4 className="font-extrabold text-foreground mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/papaya-international/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
