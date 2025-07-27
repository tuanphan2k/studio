import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-headline">Terms of Service</CardTitle>
          <p className="text-muted-foreground pt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent className="prose max-w-none dark:prose-invert">
          <h2>1. Introduction</h2>
          <p>
            Welcome to ElevateHR. These Terms of Service govern your use of our website and services. By accessing or using our service, you agree to be bound by these terms.
          </p>

          <h2>2. Use of Our Service</h2>
          <p>
            You may use our service only for lawful purposes and in accordance with these Terms. You agree not to use the service in any way that violates any applicable federal, state, local, or international law or regulation.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of ElevateHR and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ElevateHR.
          </p>
          
          <h2>4. Termination</h2>
          <p>
            We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          
          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall ElevateHR, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction, without regard to its conflict of law provisions.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
