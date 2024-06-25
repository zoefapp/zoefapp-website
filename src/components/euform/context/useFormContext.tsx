import type { FormValues } from "~/lib/euform-schema";
import { useForm, FormProvider } from "react-hook-form";
import { schema } from "~/lib/euform-schema";
import { zodResolver } from "@hookform/resolvers/zod";
export const FormProviderContext = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm<FormValues>({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data: FormValues) => console.log(data);

    return (
        <FormProvider {...methods}>
            <form
                className="bg-white/20 shadow-sm my-8 p-4 md:p-8 border border-black/10 rounded-md w-full text-skin-base"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                {children}
            </form>
        </FormProvider>
    );
};
