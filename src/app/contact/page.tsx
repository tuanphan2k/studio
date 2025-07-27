import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We're here to help. Reach out to us with any questions or inquiries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">Submit</Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="space-y-8">
            <Card>
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-md">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-muted-foreground">Get in touch via email.</p>
                        <a href="mailto:contact@elevatehr.com" className="text-primary hover:underline">contact@elevatehr.com</a>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-md">
                        <Phone className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-muted-foreground">Speak with our team.</p>
                        <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-md">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Office</h3>
                        <p className="text-muted-foreground">Visit our headquarters.</p>
                        <p className="text-primary">123 Business Rd, Suite 100, Metropolis</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
