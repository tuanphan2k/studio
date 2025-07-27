import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-headline">Privacy Policy</CardTitle>
          <p className="text-muted-foreground pt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent className="prose max-w-none dark:prose-invert">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us. For example, we collect information when you create an account, subscribe, participate in any interactive features of our services, fill out a form, request customer support, or otherwise communicate with us.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services. We may also use the information we collect to send you technical notices, updates, security alerts, and support and administrative messages.
          </p>

          <h2>3. Sharing of Information</h2>
          <p>
            We do not share your personal information with third parties except as described in this privacy policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
          </p>
          
          <h2>4. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction.
          </p>
          
          <h2>5. Your Choices</h2>
          <p>
            You may update, correct or delete information about you at any time by logging into your online account. If you wish to delete or deactivate your account, please email us, but note that we may retain certain information as required by law or for legitimate business purposes.
          </p>

          <h2>6. Cookies</h2>
          <p>
            We use cookies to improve and customize our services and your experience. You can set your browser to not accept cookies, but this may limit your ability to use the services.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
