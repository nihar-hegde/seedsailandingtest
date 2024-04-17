import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
export const Privacypolicy = () => {
  return (
    <Dialog>
      <DialogTrigger className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
        Privacy Policy
      </DialogTrigger>
      <DialogContent className=" custom-scrollbar mt-10 max-h-[600px] overflow-y-auto lg:mt-4">
        <DialogHeader>
          <DialogTitle className="mb-2">
            Privacy Policy for Seeds AI (Maverick Fintech Pvt Ltd)
          </DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">Overview:</h2>
              <p>
                At Seeds AI, a subsidiary of Maverick Fintech Pvt Ltd, we hold
                your privacy in high regard. This Privacy Policy delineates the
                collection, usage, and management of personal information when
                utilizing our suite of services, encompassing websites, data
                analytics software, and related services (&quot;Services&quot;).
                Your acceptance and consent to the practices and policies
                outlined herein are acknowledged upon using, participating in,
                or accessing our Services
              </p>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <h1 className="text-lg font-semibold">
                Information Collection and Purpose:
              </h1>
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold ">Account Information:</h2>
                <p>
                  We collect and associate with your account various data
                  including name, title, company, email address, location, phone
                  number, payment details, account activity, website
                  interactions, IP addresses, and cookie identifiers to provide,
                  secure, and enhance our Services.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold ">Services Information:</h2>
                <p>
                  Our data analytics services may gather personal information
                  from telephone calls, video conferences, online
                  demonstrations, and associated data. Such information is
                  utilized to offer insights and analysis to customers.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold ">Usage Information:</h2>
                <p>
                  We collect data related to your usage patterns within our
                  Services to personalize, enhance, and monitor their
                  effectiveness.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold ">Cookies and Technologies:</h2>
                <p>
                  We employ technologies like cookies to improve, protect, and
                  enhance our Services, although you have the option to
                  configure your browser to reject cookies.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold ">Cookies and Technologies:</h2>
                <p>
                  We employ technologies like cookies to improve, protect, and
                  enhance our Services, although you have the option to
                  configure your browser to reject cookies.
                </p>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <h2 className="text-lg font-bold ">Sharing of Information:</h2>
                <p>
                  We may share information with trusted third parties to
                  facilitate the provision, improvement, protection, and
                  promotion of our Services. Such sharing adheres to this
                  Privacy Policy. Your information may be visible to other users
                  within our Services, subject to permissions and settings.
                  Third-party applications may access your information with your
                  consent, with their usage governed by their respective privacy
                  policies. Seeds AI does not monitor or enforce customer
                  privacy policies but expects compliance with applicable laws.
                </p>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <h2 className="text-lg font-bold ">
                  Administrative Controls and Legal Compliance:
                </h2>
                <p>
                  Team administrators may access and manage team accounts, and
                  information may be shared with team members accordingly. We
                  reserve the right to access, preserve, and disclose
                  information in compliance with legal obligations or to protect
                  the safety and rights of users.
                </p>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <h2 className="text-lg font-bold ">
                  Anonymized Data and Security Measures:
                </h2>
                <p>
                  We may anonymize or aggregate personal information to improve
                  our services and may share such data with partners for
                  analytical purposes. Robust security measures, including
                  Transport Layer Security (TLS), are implemented to safeguard
                  personal information. However, absolute security cannot be
                  guaranteed. Personal data is stored on Google infrastructure
                  within the United States, adhering to industry-leading
                  security standards.
                </p>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <h2 className="text-lg font-bold ">
                  Data Retention and Changes:
                </h2>
                <p>
                  Information retention aligns with the necessity to provide
                  Services or comply with legal requirements. Users can request
                  deletion or access to their data. In the event of
                  reorganization or similar events, user information may be
                  transferred accordingly, with notification provided.
                </p>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <h2 className="text-lg font-bold ">Access and Contact:</h2>
                <p>
                  Users may access, edit, or delete certain information through
                  account settings. Changes in available information may occur
                  with Service updates. Users whose information was provided by
                  our customers should contact the customer for requests related
                  to their data.
                </p>
              </div>
              <p className="font-semibold ">
                By continuing to use our Services, you signify your
                understanding and agreement with the provisions outlined in this
                Privacy Policy. For any inquiries or concerns regarding your
                privacy, please contact us at{" "}
                <span className="font-bold underline">
                  support@seedsai.com.
                </span>
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
