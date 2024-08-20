import { useController, useFormContext } from "react-hook-form";
import RInput from "../ui/RInput";
import RLabel from "../ui/RLabel";
import { useStepContext } from "./context/useStepContext";
import { ticketTypes } from "~/lib/euform-schema";
import RSelect from "../ui/RSelect";
import InputErrorMessage from "./InputErrorMessage";
const PersonalInformation = () => {
    const { currentStep } = useStepContext();
    const { control } = useFormContext();

    const {
        field: firstNameField,
        fieldState: { error: firstNameError },
    } = useController({ name: "passenger.firstName", control, defaultValue: "" });

    const {
        field: lastNameField,
        fieldState: { error: lastNameError },
    } = useController({ name: "passenger.lastName", control, defaultValue: "" });

    const {
        field: emailField,
        fieldState: { error: emailError },
    } = useController({ name: "passenger.email", control, defaultValue: "" });

    const {
        field: phoneNumberField,
        fieldState: { error: phoneNumberError },
    } = useController({ name: "passenger.phoneNumber", control, defaultValue: "" });

    const {
        field: houseNumberField,
        fieldState: { error: houseNumberError },
    } = useController({ name: "passenger.houseNumber", control, defaultValue: "" });

    const {
        field: postalCodeField,
        fieldState: { error: postalCodeError },
    } = useController({ name: "passenger.postalCode", control, defaultValue: "" });

    const {
        field: cityField,
        fieldState: { error: cityError },
    } = useController({ name: "passenger.city", control, defaultValue: "" });

    const {
        field: streetNameField,
        fieldState: { error: streetNameError },
    } = useController({ name: "passenger.streetName", control, defaultValue: "" });

    const {
        field: countryCodeField,
        fieldState: { error: countryCodeError },
    } = useController({ name: "passenger.countryCode", control, defaultValue: "" });

    const {
        field: ibanField,
        fieldState: { error: ibanError },
    } = useController({ name: "payment.iban", control, defaultValue: "" });

    const {
        field: accountHolderField,
        fieldState: { error: accountHolderError },
    } = useController({ name: "payment.accountHolder", control, defaultValue: "" });

    const {
        field: additionalInformationField,
        fieldState: { error: additionalInformationError },
    } = useController({ name: "additionalInformation", control, defaultValue: "" });

    return (
        currentStep === 5 && (
            <section className="grid gap-2 xl:w-2/4">
                <h1 className="text-xl font-semibold">Personal Information</h1>
                <aside className="flex items-start gap-2">
                    <div className="w-full">
                        <RLabel htmlFor="firstName">First Name*</RLabel>
                        <RInput id="firstName" {...firstNameField} error={firstNameError} placeholder="First Name" />
                        <InputErrorMessage message={firstNameError?.message} />
                    </div>
                    <div className="w-full">
                        <RLabel htmlFor="lastName">Last Name*</RLabel>
                        <RInput id="lastName" {...lastNameField} error={lastNameError} placeholder="Last Name" />
                        <InputErrorMessage message={lastNameError?.message} />
                    </div>
                </aside>
                <aside className="flex items-start gap-2">
                    <div className="w-full">
                        <RLabel htmlFor="email">Email</RLabel>
                        <RInput id="email" {...emailField} error={emailError} placeholder="Email" />
                        <InputErrorMessage message={emailError?.message} />
                    </div>
                    <div className="w-full">
                        <RLabel htmlFor="phoneNumber">Phone Number</RLabel>
                        <RInput
                            type="tel"
                            {...phoneNumberField}
                            error={phoneNumberError}
                            id="phoneNumber"
                            placeholder="Phone Number"
                        />
                        <InputErrorMessage message={phoneNumberError?.message} />
                    </div>
                </aside>
                <aside className="flex items-start gap-2">
                    <div className="w-full">
                        <RLabel htmlFor="city">City</RLabel>
                        <RInput id="city" placeholder="City" {...cityField} error={cityError} />
                        <InputErrorMessage message={cityError?.message} />
                    </div>
                    <div className="w-full">
                        <RLabel htmlFor="streetName">Street Name</RLabel>
                        <RInput
                            id="streetName"
                            placeholder="Street Name"
                            {...streetNameField}
                            error={streetNameError}
                        />
                        <InputErrorMessage message={streetNameError?.message} />
                    </div>
                    <div className="w-full">
                        <RLabel htmlFor="countryCode">Country Code</RLabel>
                        <RInput
                            id="countryCode"
                            placeholder="Country Code"
                            {...countryCodeField}
                            error={countryCodeError}
                        />
                        <InputErrorMessage message={countryCodeError?.message} />
                    </div>
                </aside>
                <aside className="flex items-start gap-2">
                    <div className="w-full">
                        <RLabel htmlFor="houseNumber">House Number</RLabel>
                        <RInput
                            id="houseNumber"
                            placeholder="House Number"
                            {...houseNumberField}
                            error={houseNumberError}
                        />
                        <InputErrorMessage message={houseNumberError?.message} />
                    </div>
                    <div className="w-full">
                        <RLabel htmlFor="postalCode">Postal Code</RLabel>
                        <RInput
                            id="postalCode"
                            placeholder="Postal Code"
                            {...postalCodeField}
                            error={postalCodeError}
                        />
                        <InputErrorMessage message={postalCodeError?.message} />
                    </div>
                </aside>

                <div className="border-b my-4"></div>
                <h2 className="text-xl font-semibold">Payment</h2>
                <aside className="flex items-start gap-2">
                    <div className="w-full">
                        <RLabel htmlFor="iban">IBAN*</RLabel>
                        <RInput id="iban" placeholder="IBAN" {...ibanField} error={ibanError} />
                        <InputErrorMessage message={ibanError?.message} />
                    </div>
                    <div className="w-full">
                        <RLabel htmlFor="accountHolder">Account Holder*</RLabel>
                        <RInput
                            id="accountHolder"
                            placeholder="Account Holder"
                            {...accountHolderField}
                            error={accountHolderError}
                        />
                        <InputErrorMessage message={accountHolderError?.message} />
                    </div>
                </aside>
                <div className="border-b my-4"></div>
                <div className="grid w-full">
                    <RLabel htmlFor="additionalInformation">Additional Information*</RLabel>
                    <textarea
                        className="resize-none p-2 border rounded-md data-[error]:border-red-500"
                        rows={7}
                        data-error={additionalInformationError?.message}
                        placeholder="Please specify any additional information you'd like us to know."
                        id="additionalInformation"
                        {...additionalInformationField}
                    ></textarea>
                    <InputErrorMessage message={additionalInformationError?.message} />
                </div>
            </section>
        )
    );
};

export default PersonalInformation;
