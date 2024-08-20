
const InputErrorMessage = ({ message }: { message: string | undefined }) => {
    return message === undefined ? null : <p className="text-red-500 text-xs pt-1">{message}</p>;
};

export default InputErrorMessage;
