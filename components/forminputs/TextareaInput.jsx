"use client";
export default function TextareaInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 dark:text-slate-300 text-gray-900 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(`${name}`, { required: isRequired })}
          name={name}
          id={name}
          rows={3}
          className="block w-full dark:bg-transparent rounded-md border-0 py-2 dark:text-slate-400 text-gray-50 shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
          defaultValue={""}
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}