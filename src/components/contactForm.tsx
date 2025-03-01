"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { toast } from "sonner";
import { Loader2 } from "lucide-react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactInput, ContactInputs } from "@/schema/contactFormSchema"

function ContactForm() {
  const [isSubmitting, SetIsSubmitting] = useState(false);
  // React Hook Form Here 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactInput),
  })

  // After Submit Value Form Action
  const onSubmit: SubmitHandler<ContactInputs> = async (data) => {
    try {
      SetIsSubmitting(true);
      const response = await fetch("/api/contactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        reset(); 
        toast.success("Thank You, Your Enquiry has been submit successfully."); // Success toast
      } else {
        toast.error("Failed to send message."); // Success toast
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred."); // Success toast
    } finally {
      SetIsSubmitting(false);
    }
    
  };

  return (
    <>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Feedback
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name*
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.name && <span className="form-input-error">{errors.name.message}</span>}
          </div>
          <div className="relative mb-4">
            <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">
              Mobile*
            </label>
            <input
              {...register("mobile")}
              type="text"
              id="mobile"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.mobile && <span className="form-input-error">{errors.mobile.message}</span>}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email*
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.email && <span className="form-input-error">{errors.email.message}</span>}
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              {...register("message")}
              id="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
            {errors.message && <span className="form-input-error">{errors.message.message}</span>}
          </div>


        
           
           {isSubmitting ? (
            <>
            <Button disabled={isSubmitting} type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <Loader2 className="animate-spin" />
            Please wait
            </Button>
            </>
          ) : (
            <>
            <Button disabled={isSubmitting} type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
             Submit Enquiry
            </Button>
            </>
          )}
        </form>
        <p className="text-xs text-gray-500 mt-3">
          The required fields (*)
        </p>
      </div>
    </>
  )
}

export default ContactForm