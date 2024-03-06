"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/qNLSalKcLtD
 */
import { buyNow } from "@/actions/form";
import { UserType, UserTypeLabel } from "@/app/types";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import { FormMessage } from "./form";
import { SubmitButton } from "./submit-button";

enum RequestInfoValue {
  Sample = "sample",
  Discount = "discount",
  Enquiry = "enquiry",
  BulkReport = "bulk-report",
}

enum RequestInfoLabel {
  RequestSample = "Request Sample",
  RequestDiscount = "Request Discount",
  PreOrderEnquiry = "Pre Order Enquiry",
  RequestBulkReport = "Request Bulk Report",
}

interface BuyingOptionsProps {
  reportId: string;
  prices: { price: string; userType: UserType }[];
}

interface RequestData {
  label: RequestInfoLabel;
  value: RequestInfoValue;
}

const requestLinks: RequestData[] = [
  { label: RequestInfoLabel.RequestSample, value: RequestInfoValue.Sample },
  { label: RequestInfoLabel.RequestDiscount, value: RequestInfoValue.Discount },
  { label: RequestInfoLabel.PreOrderEnquiry, value: RequestInfoValue.Enquiry },
  {
    label: RequestInfoLabel.RequestBulkReport,
    value: RequestInfoValue.BulkReport,
  },
];

export function BuyingOptions(props: BuyingOptionsProps) {
  const [state, action] = useFormState(buyNow, { user: null, error: null });
  if (state.user) {
    redirect(`/checkout?id=${props.reportId}&user=${state.user}`);
  }
  return (
    <div className="flex flex-col space-y-6  py-8 md:py-12 lg:py-24 ">
      <div className="border">
        <div className="bg-gray-200 p-4 text-center text-xl font-semibold">
          Buying Options
        </div>
        <form className="space-y-4 px-6 py-4" action={action}>
          <RadioGroup defaultValue={UserType.SingleUser} required name="user">
            {props.prices.map((item) => (
              <div className="flex items-center space-x-2" key={item.userType}>
                <RadioGroupItem id={item.userType} value={item.userType} />
                <Label htmlFor={item.userType}>
                  {UserTypeLabel[item.userType]} ${item.price}
                </Label>
              </div>
            ))}
          </RadioGroup>
          <SubmitButton textContent="Buy Now" />
          <FormMessage>{state.error}</FormMessage>
        </form>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 px-6">
        {requestLinks.map((button) => (
          <Link
            href={`/request?id=${props.reportId}&value=${button.value}`}
            className={cn(
              buttonVariants({ variant: "default" }),
              "text-white uppercase"
            )}
            key={button.value}
          >
            {button.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
