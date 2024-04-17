"use client";
import CalComIntegration from "../CalComIntegration";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { contactSchema, contactTypes } from "@/lib/validators";
import { sendEmailAction } from "@/lib/Actions/sendEmail";
import { toast } from "sonner";

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: contactTypes) => {
    try {
      const result = await sendEmailAction(data);
      if (result.success) {
        toast.success("Message sent!");
        form.reset();
        return;
      } else {
        toast.error("Failed to send the message!");
      }
    } catch (error) {
      toast.error("Something went wrong!!!");
    }
  };

  return (
    <div className="relative mt-20 grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2">
      <div className="absolute left-1/2 top-1/2 -z-20 h-[31.25rem] w-[full] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#0098d9]/10 blur-[10rem] dark:bg-[#0098d9]/20 sm:w-[68.75rem]"></div>
      <div className="mb-5 flex  flex-col items-start  justify-center gap-4 p-4 text-black dark:text-white">
        <h1 className="text-2xl font-extrabold lg:text-5xl">
          Let&apos;s Get in Touch!
        </h1>
        <p className="lg:text-md text-sm">
          Ready to unlock the power of your untapped data and transform your
          customer service into a revenue-generating engine? Reach out to our
          team of experts today.
        </p>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Contact Info:</h2>
          <p className="lg:text-md text-sm">
            <span className="font-medium">Phone: </span>
            <span>
              {" "}
              <span className="hover:underline">+91 9873027250 </span>,
              <span className="hover:underline"> +91 7877256747 </span>
            </span>
          </p>
          <p className="lg:text-md text-sm">
            <span className="font-medium">Email: </span>
            <span className="hover:underline">info@seedsai.co</span>
          </p>
        </div>
        <div className="">
          <h2 className="mb-2 text-2xl font-bold ">Schedule a Demo:</h2>
          <p className=" lg:text-md mb-4 text-sm lg:mb-0">
            Experience the transformative capabilities firsthand. Schedule a
            personalized demo see how our solutions can benefit your business.
          </p>
          <div className="flex items-center justify-center">
            <CalComIntegration />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <p>
            We look forward to partnering with you and unlocking the true
            potential of your enterprise.
          </p>
        </div>
      </div>

      <div className="w-full rounded-lg bg-[#0098d9]/20 p-2 lg:rounded-3xl  lg:p-6">
        <div className="flex flex-col items-center justify-center gap-2 p-2 lg:p-8">
          <h1 className="mb-2 text-2xl font-extrabold text-black dark:text-white lg:text-4xl">
            Contact Form
          </h1>
          <p>
            Whether you have a specific question or want to explore our
            comprehensive suite of products, our team is here to help.
          </p>

          <p className="mb-2 ">
            Fill out the form, and we&apos;ll be in touch shortly.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <div className="flex w-full flex-col gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-md text-black dark:text-white lg:text-xl">
                        Your Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={form.formState.isSubmitting}
                          {...field}
                          className=" rounded-2xl bg-slate-950/10 p-2 py-6 dark:bg-slate-950/60 lg:p-4 lg:py-8"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 dark:text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-md text-black dark:text-white lg:text-xl">
                        Your Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={form.formState.isSubmitting}
                          {...field}
                          className=" rounded-2xl bg-slate-950/10 p-2 py-6 dark:bg-slate-950/60 lg:p-4 lg:py-8"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 dark:text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-md text-black dark:text-white lg:text-xl">
                        Your Phone No.
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={form.formState.isSubmitting}
                          {...field}
                          className="rounded-2xl bg-slate-950/10 p-2 py-6 dark:bg-slate-950/60 lg:p-4 lg:py-8"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 dark:text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-md text-black dark:text-white lg:text-xl">
                        Your Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          disabled={form.formState.isSubmitting}
                          {...field}
                          className="rounded-2xl bg-slate-950/10 p-4 py-6 dark:bg-slate-950/60"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 dark:text-red-600" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="mt-5 rounded-2xl bg-slate-950 p-6 text-lg text-white transition-colors duration-300 ease-in-out hover:bg-[#0098d9]"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
