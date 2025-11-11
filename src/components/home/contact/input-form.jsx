import React, { useEffect, useState } from "react";

const InputText = ({
  field,
  label,
  name,
  value,
  placeholder,
  form: { touched, errors },
  ...props
}) => {
  return (
    <div className="my-3">
      <input
        type="text"
        placeholder={placeholder}
        {...field}
        {...props}
        className={`flex m-0 py-0 text-zinc-800 dark:text-white h-9 w-full rounded-md border ${
          touched[field.name] && errors[field.name]
            ? "border-red-500"
            : "border-zinc-500 dark:border-zinc-800"
        } bg-white/60 dark:bg-zinc-950/60 px-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 ${
          touched[field.name] && errors[field.name]
            ? "focus-visible:ring-red-500"
            : "focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
        } disabled:cursor-not-allowed disabled:opacity-50`}
      />
      {touched[field.name] && errors[field.name] && (
        <span className="text-red-500">{errors[field.name]}</span>
      )}
    </div>
  );
};

export default InputText;
