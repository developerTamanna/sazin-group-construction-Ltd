"use client";

export default function JobCard({ job, onApply }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">{job.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {job.location} · {job.type}
      </p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{job.description}</p>
      <p className="mt-2 text-sm text-gray-500">Deadline: {job.deadline}</p>
      <button
        onClick={() => onApply(job)}
        className="mt-4 px-4 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-800 transition"
      >
        Apply Now
      </button>
    </div>
  );
}
