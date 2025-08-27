import {
  FaAward,
  FaBalanceScale,
  FaLeaf,
  FaShieldAlt,
  FaUsers,
} from 'react-icons/fa';

const values = [
  {
    title: 'Integrity',
    desc: 'We uphold honesty, transparency, and fairness.',
    icon: (
      <FaBalanceScale className="w-8 h-8 mx-auto mb-4 text-red-500 dark:text-red-600" />
    ),
  },
  {
    title: 'Excellence',
    desc: 'We deliver high-quality and innovative solutions.',
    icon: (
      <FaAward className="w-8 h-8 mx-auto mb-4 text-red-500 dark:text-red-600" />
    ),
  },
  {
    title: 'Safety',
    desc: 'We ensure safe practices across every project.',
    icon: (
      <FaShieldAlt className="w-8 h-8 mx-auto mb-4 text-red-500 dark:text-red-600" />
    ),
  },
  {
    title: 'Sustainability',
    desc: 'We prioritize eco-friendly and lasting impacts.',
    icon: (
      <FaLeaf className="w-8 h-8 mx-auto mb-4 text-red-500 dark:text-red-600" />
    ),
  },
  {
    title: 'Teamwork',
    desc: 'We work together with clients & partners for success.',
    icon: (
      <FaUsers className="w-8 h-8 mx-auto mb-4 text-red-500 dark:text-red-600" />
    ),
  },
    {
    title: 'Safety',
    desc: 'We ensure safe practices across every project.',
    icon: (
      <FaShieldAlt className="w-8 h-8 mx-auto mb-4 text-red-500 dark:text-red-600" />
    ),
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-20 px-6 lg:px-8 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semi-bold dark:text-white">
        Our <span className='text-red-600'>Core Values</span>
      </h2>
      <div className="w-20 h-1 bg-red-600 dark:bg-red-600 mx-auto mt-4 rounded-full"></div>

      {/* Values Grid */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {values.map((v) => (
          
          <div
            key={v.title}
            className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Icon */}
            {v.icon}

            <h3 className="text-xl font-bold text-red-600 dark:text-red-600">
              {v.title}
            </h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
