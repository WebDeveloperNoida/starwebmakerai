"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { toast } from "sonner";
import { Loader2 } from "lucide-react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubscriberInput, SubscriberInputs } from "@/schema/subscriberSchema"

function SubscriberPage() {

    const [isSubmitting, SetIsSubmitting] = useState(false);
    // React Hook Form Here 
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(SubscriberInput),
    })

  // After Submit Value Form Action
  const onSubmit: SubmitHandler<SubscriberInputs> = async (data) => {
    try {
      SetIsSubmitting(true);
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if(response.ok) {
        reset(); 
        toast.success("Thank You, Your have been subscribed.",
        {
          style: {
            backgroundColor: 'rgb(33 159 10)',
            border: '1px solid rgb(21 21 23)',
            color: 'white',
          },
        }); // Success toast
      } else {
        toast.error("Failed to subscribe.",
        {
          style: {
            backgroundColor: '#fef2f2',
            border: '1px solid #ef4444',
            color: '#dc2626',
          },
        }); // Success toast
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred.",
      {
        style: {
          backgroundColor: '#fef2f2',
          border: '1px solid #ef4444',
          color: '#dc2626',
        },
      }); // Success toast
    } finally {
      SetIsSubmitting(false);
    }
    
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
          
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label
            htmlFor="footer-field"
            className="leading-7 text-md font-bold text-gray-600"
          >
          SUBSCRIBE HERE
          </label>
          <input
          {...register("email")}
            placeholder='Enter email address'
            type="email"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        {isSubmitting ? (
            <Button disabled={isSubmitting} type="submit" className="inline-flex h-11 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            <Loader2 className="animate-spin" />
            Please wait
            </Button>
          ) : (
            <Button disabled={isSubmitting} type="submit" className="inline-flex h-11 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            SUBSCRIBE NOW
            </Button>
          )}
      </div>
      {errors.email && <span className="form-input-error">{errors.email.message}</span>}
      </form>
    </>
  )
}

export default SubscriberPage