import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";

export const Tos = () => {
  return (
    <Dialog>
      <DialogTrigger className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
        Service Level Agreement
      </DialogTrigger>
      <DialogContent className="custom-scrollbar mt-10 max-h-[600px] overflow-y-auto lg:mt-4">
        <DialogHeader>
          <DialogTitle>Service Level Agreement</DialogTitle>
          <DialogDescription>
            <p className="font-semibold">
              This Service Level Agreement (SLA) describes the Support and
              Maintenance Services provided by Seeds AI to customers purchasing
              a Software Services subscription license as identified in a valid
              Order Form. All capitalized terms used herein shall have the
              meaning set forth in the Agreement unless otherwise defined.{" "}
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <h1 className="font-semibold">Service Availability:</h1>
              <p>
                Seeds AI shall provide Customer with 99.0% availability to the
                Service.
              </p>
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <h1 className="font-semibold">Service Support:</h1>
              <p>
                Seeds AI shall provide email support for the Service to Customer
                on a 8x5x252 basis (8 hours per day, 5 days per week, 52 weeks
                per year).
              </p>
              <p>
                Service Support shall only include assistance with issues
                exclusively due to an error with the Service (i.e., a failure of
                the Service to conform to the written specifications provided by
                Seeds AI). Any support outside the scope of Service Support
                shall be provided by Seeds AI on a time and materials basis.
              </p>
              <p>
                The Service Availability will be measured monthly, excluding
                reasonable scheduled downtime for system maintenance, downtime
                resulting from outages of third-party connections or utilities,
                or other reasons beyond Seeds AI&apos;s control (including force
                majeure events).
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">Error Response Times:</h2>
              <p>
                Seeds AI shall assign a priority level to each Error reported by
                Customer and respond and provide status updates in accordance
                with the following table:
              </p>
              <p className="flex flex-col gap-1">
                <h3 className="font-semibold">
                  Priority 1 (Services completely unavailable or unusable, or
                  data security breach/hack):
                </h3>
                Response within 8 business hours, status updates every 8
                business hours.
                <h3 className="font-semibold">
                  Priority 2 (Major functionality unusable, affecting many
                  users):
                </h3>
                Response within 16 business hours, status updates every 16
                business hours.
                <h3 className="font-semibold">
                  Priority 3 (Loss of function not seriously affecting
                  functionality):
                </h3>{" "}
                Response within 24 business hours, status updates every 24
                business hours.
                <h3 className="font-semibold">
                  Priority 4 (All other problems):{" "}
                </h3>
                Response within 32 business hours, status updates every 32
                business hours.
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <h2 className="font-semibold">Service Credits:</h2>
              <p>
                If (i) the Service is unavailable due to defects beyond the
                Service Availability metric, or (ii) Seeds AI fails to respond
                to a Customer Error report within the allotted time frame, then
                as Customer&apos;s sole and exclusive remedy, Seeds AI will
                credit Customer with one (1) day of free access to the Service
                for each full hour of unavailability beyond the Service
                Availability metric and for each response failure. Such credits
                may not be redeemed for cash and shall not exceed one (1) free
                month of access to the Services.
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <p>
                To receive service credits, Customer must notify Seeds AI in
                writing within seventy-two (72) hours from the time of downtime
                or response failure.
              </p>
              <p>
                This SLA forms a part of Seeds AI&apos;s Service Terms and
                Conditions. Capitalized terms not defined in this SLA shall have
                the meaning set forth in the Service Terms.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
