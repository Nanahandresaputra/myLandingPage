import React from "react";

const TextArea = ({
  field,
  label,
  name,
  value,
  placeholder,
  form: { touched, errors },
  ...props
}) => {
  // touched[field.name] && errors[field.name]
  return (
    <div className="my-3">
      <textarea
        {...field}
        {...props}
        placeholder={placeholder}
        rows="6"
        className={`flex text-zinc-800 dark:text-white w-full rounded-md border ${
          touched[field.name] && errors[field.name]
            ? "border-red-500"
            : "border-zinc-500 dark:border-zinc-800"
        }  bg-white/60 dark:bg-zinc-950/60 px-3 py-5 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 ${
          touched[field.name] && errors[field.name]
            ? "focus-visible:ring-red-500"
            : "focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
        } disabled:cursor-not-allowed disabled:opacity-50`}
      ></textarea>
      {touched[field.name] && errors[field.name] && (
        <span className="text-red-500 text-xs md:text-base">
          {errors[field.name]}
        </span>
      )}
    </div>
  );
};

export default TextArea;
