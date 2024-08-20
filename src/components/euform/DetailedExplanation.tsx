import { useFormContext, Controller } from "react-hook-form";
import RLabel from "../ui/RLabel";

const DetailedExplanation = () => {
    const { control } = useFormContext();

    return (
        <Controller
            name="whatHappened.detailedExplanation"
            control={control}
            render={({ field }) => (
                <div className="grid gap-2">
                    <RLabel htmlFor="whatHappened.detailedExplanation">Detailed Explanation</RLabel>
                    <textarea
                        {...field}
                        id="whatHappened.detailedExplanation"
                        placeholder="Detailed Explanation"
                        cols={1}
                        rows={8}
                        className="w-full max-w-md resize-none p-3 border rounded-md"
                    ></textarea>
                </div>
            )}
        />
    );
};

export default DetailedExplanation;
