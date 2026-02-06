import { Link } from 'react-router-dom';

const features = [
  'Smart Note (Handwriting → Clean Digital Note)',
  'Chapter Summary Generator',
  'Doubt Solver (২৪ ঘন্টার AI টিচার)',
  'Flashcard Generator',
  'MCQ Generator',
  'Study Routine Planner',
  'Bangla–English AI Translator',
];

const plans = [
  {
    name: 'Monthly',
    price: '৳299',
    description: 'বাংলাদেশি শিক্ষার্থীদের জন্য মাসিক প্ল্যান।',
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-2xl font-bold text-slate-900">AI for Super Students</h1>
        <div className="flex gap-3">
          <Link className="rounded-lg border border-slate-300 px-4 py-2 text-sm" to="/login">
            Login
          </Link>
          <Link className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white" to="/register">
            Sign up
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="rounded-2xl bg-white p-10 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-900">
            বাংলাদেশের শিক্ষার্থীদের জন্য AI-powered Educational Platform
          </h2>
          <p className="mt-4 text-slate-600">
            “AI for Super Students” বইয়ের use-case গুলোকে এক জায়গায় এনে স্মার্ট স্টাডি
            অ্যাসিস্ট্যান্ট বানানো হয়েছে। এখন থেকেই সময় বাঁচিয়ে শিখুন দ্রুত, মনে রাখুন
            বেশি।
          </p>
          <div className="mt-6 flex gap-4">
            <Link className="rounded-lg bg-slate-900 px-5 py-3 text-white" to="/dashboard">
              See Features
            </Link>
            <Link className="rounded-lg border border-slate-300 px-5 py-3" to="/register">
              Login / Sign up
            </Link>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature} className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">{feature}</h3>
              <p className="mt-2 text-sm text-slate-600">
                AI দিয়ে দ্রুত আউটপুট, সংক্ষিপ্ত ব্যাখ্যা, এবং পরীক্ষার জন্য সঠিক ফোকাস।
              </p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Subscription Plan</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-xl border border-slate-200 p-6">
                <h4 className="text-lg font-semibold text-slate-900">{plan.name}</h4>
                <p className="mt-2 text-3xl font-bold text-slate-900">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
                <button className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm">
                  Upgrade (Coming Soon)
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
