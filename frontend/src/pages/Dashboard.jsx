import { useState } from 'react';
import FeatureCard from '../components/FeatureCard';
import FeatureForm from '../components/FeatureForm';
import FeatureResult from '../components/FeatureResult';
import { apiClient } from '../utils/apiClient';

const features = [
  { key: 'smart-note', label: 'Smart Note' },
  { key: 'summary', label: 'Chapter Summary' },
  { key: 'mcq', label: 'MCQ Generator' },
  { key: 'translate', label: 'AI Translator' },
];

const Dashboard = () => {
  const [activeFeature, setActiveFeature] = useState('smart-note');
  const [formState, setFormState] = useState({
    text: '',
    image: null,
    pdf: null,
    audio: null,
    videoUrl: '',
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const payload = {
        text: formState.text,
        fileUrls: {
          image: formState.image?.name ? 'mock-image-url' : null,
          pdf: formState.pdf?.name ? 'mock-pdf-url' : null,
          audio: formState.audio?.name ? 'mock-audio-url' : null,
          video: formState.videoUrl,
        },
      };
      // TODO: Replace mock upload with /api/files/upload and pass returned URLs.
      const response = await apiClient.post(`/ai/${activeFeature}`, payload);
      setResult(response.data);
    } catch (error) {
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI Student Dashboard</h1>
          <p className="text-sm text-slate-600">Plan: Monthly • Expiry: 30 days</p>
        </div>
        <div className="text-sm text-slate-600">Usage: 3/50 features</div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-6 pb-12 md:grid-cols-[220px_1fr]">
        <aside className="space-y-2">
          {features.map((feature) => (
            <button
              key={feature.key}
              onClick={() => setActiveFeature(feature.key)}
              className={`w-full rounded-lg px-4 py-2 text-left text-sm ${
                activeFeature === feature.key
                  ? 'bg-slate-900 text-white'
                  : 'border border-slate-200 bg-white text-slate-700'
              }`}
            >
              {feature.label}
            </button>
          ))}
        </aside>

        <section className="space-y-6">
          <FeatureCard
            title="Feature Input"
            description="টেক্সট লিখুন, ফাইল আপলোড করুন, তারপর Run with AI চাপুন।"
          >
            <FeatureForm onSubmit={handleSubmit} formState={formState} setFormState={setFormState}>
              {activeFeature === 'translate' && (
                <div className="grid gap-3 md:grid-cols-2">
                  <select className="rounded-lg border border-slate-200 p-2 text-sm">
                    <option value="bn">Bangla</option>
                    <option value="en">English</option>
                  </select>
                  <select className="rounded-lg border border-slate-200 p-2 text-sm">
                    <option value="en">English</option>
                    <option value="bn">Bangla</option>
                  </select>
                </div>
              )}
            </FeatureForm>
            {loading && <p className="text-sm text-slate-600">Processing...</p>}
          </FeatureCard>

          <FeatureCard
            title="Result"
            description="AI আউটপুট এখানে দেখানো হবে। এটি পরবর্তীতে সুন্দর ভিউতে রেন্ডার করবেন।"
          >
            <FeatureResult title="Output" data={result || { message: 'No output yet.' }} />
          </FeatureCard>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
