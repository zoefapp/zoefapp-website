import type { FormValues } from "~/lib/euform-schema";
import { useForm, FormProvider } from "react-hook-form";
import { schema } from "~/lib/euform-schema";
import { zodResolver } from "@hookform/resolvers/zod";
export const FormProviderContext = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm<FormValues>({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data: FormValues) => {
        alert("Form submitted!");
        // console.log(data);

        const submitData = {
            ticket: data.ticketSchema,
            actualRoute: data.plannedRoute,
            whatHappened: data.whatHappened,
            additionalInformation: data.additionalInformation,
            passenger: data.passenger,
            payment: data.payment
        };

        console.log(submitData);
    };

    return (
        <FormProvider {...methods}>
            <form
                className="bg-slate-50 shadow-md my-8 p-4 md:p-8 border border-black/10 rounded-md w-full text-skin-base"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                {children}
            </form>
        </FormProvider>
    );
};
