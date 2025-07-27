import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Youtube } from "lucide-react";
import Image from "next/image";

const officeHours = [
  { office: "Admissions Office", hours: "Mon-Fri: 8:00 AM - 6:00 PM" },
  { office: "Student Services", hours: "Mon-Fri: 9:00 AM - 5:00 PM" },
  { office: "Academic Advising", hours: "Mon-Fri: 8:30 AM - 4:30 PM" },
  { office: "Financial Aid", hours: "Mon-Fri: 9:00 AM - 4:00 PM" },
];

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Have questions? We're here to help! Reach out to us through any of the following channels and our team will get back to you promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <Card className="text-center">
          <CardHeader className="items-center">
            <div className="bg-primary/10 text-primary p-4 rounded-full">
              <MapPin className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4">Campus Address</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              123 Business Rd, Suite 100
              <br />
              Metropolis, 12345
              <br />
              United States
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader className="items-center">
            <div className="bg-primary/10 text-primary p-4 rounded-full">
              <Phone className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground space-y-2">
              <p>Main Office: <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a></p>
              <p>Email: <a href="mailto:contact@elevatehr.com" className="text-primary hover:underline">contact@elevatehr.com</a></p>
            </div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader className="items-center">
            <div className="bg-primary/10 text-primary p-4 rounded-full">
              <div className="flex gap-4">
                <Facebook className="h-8 w-8" />
                <Youtube className="h-8 w-8" />
              </div>
            </div>
            <CardTitle className="font-headline mt-4">Follow Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Stay connected for the latest news, events, and updates from our community.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Office Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {officeHours.map((item) => (
                <div key={item.office} className="flex justify-between items-center bg-secondary/50 p-4 rounded-md">
                  <p className="font-semibold">{item.office}</p>
                  <p className="text-muted-foreground">{item.hours}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Campus Map</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <div className="w-full h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex flex-col items-center justify-center text-white p-4">
              <MapPin className="h-12 w-12 mb-2" />
              <h3 className="text-xl font-bold">Interactive Campus Map</h3>
              <p>Find buildings, parking, and facilities</p>
            </div>
            <Button variant="outline" className="mt-4 w-full">View Full Campus Map</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
