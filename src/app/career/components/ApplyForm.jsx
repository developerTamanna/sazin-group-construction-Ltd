"use client";
import { useForm } from "react-hook-form";

export default function ApplyForm({ job }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(`Application submitted for ${job.title}`);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg space-y-4"
    >
      <div>
        <label className="block text-sm font-medium mb-1 text-black dark:text-gray-300">Full Name</label>
        <input
          {...register("name", { required: true })}
          className="w-full p-2 border rounded-lg dark:bg-neutral-800 dark:border-gray-600"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">Full Name is required</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-black dark:text-gray-300">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full p-2 border rounded-lg dark:bg-neutral-800 dark:border-gray-600"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">Email is required</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-black dark:text-gray-300">Phone</label>
        <input
          type="text"
          {...register("phone", { required: true })}
          className="w-full p-2 border rounded-lg dark:bg-neutral-800 dark:border-gray-600"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">Phone number is required</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-black dark:text-gray-300">Upload CV</label>
        <input
          type="file"
          {...register("cv", { required: true })}
          className="w-full text-black dark:text-gray-300 cursor-pointer"
        />
        {errors.cv && (
          <p className="text-red-500 text-sm">CV upload is required</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Submit Application
      </button>
    </form>
  );
}
