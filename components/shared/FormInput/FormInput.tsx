"use client";

import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { RequiredSymbol } from "../RequiredSymbol";
import { ClearButton } from "../ClearButton";
import { Label } from "@/components/ui/label";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <div className={className}>
      {label && (
        <Label className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </Label>
      )}

      <div className="relative">
        <Input className="h-8 text-md" {...register(name)} {...props} />

        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <p className={"text-red-500 text-sm mt-2"}>{errorText}</p>}
    </div>
  );
};
