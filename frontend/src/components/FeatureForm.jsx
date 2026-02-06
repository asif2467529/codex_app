const FeatureForm = ({ onSubmit, formState, setFormState, children }) => {
  return (
    <form
      className="space-y-3"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <textarea
        className="w-full rounded-lg border border-slate-200 p-3 text-sm"
        rows={4}
        placeholder="আপনার লেখা বা নির্দেশনা লিখুন..."
        value={formState.text}
        onChange={(event) => setFormState((prev) => ({ ...prev, text: event.target.value }))}
      />
      <div className="grid gap-3 md:grid-cols-2">
        <input
          className="w-full rounded-lg border border-slate-200 p-2 text-sm"
          type="file"
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, image: event.target.files?.[0] || null }))
          }
        />
        <input
          className="w-full rounded-lg border border-slate-200 p-2 text-sm"
          type="file"
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, pdf: event.target.files?.[0] || null }))
          }
        />
        <input
          className="w-full rounded-lg border border-slate-200 p-2 text-sm"
          type="file"
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, audio: event.target.files?.[0] || null }))
          }
        />
        <input
          className="w-full rounded-lg border border-slate-200 p-2 text-sm"
          type="url"
          placeholder="Video URL (future expansion)"
          value={formState.videoUrl}
          onChange={(event) => setFormState((prev) => ({ ...prev, videoUrl: event.target.value }))}
        />
      </div>
      {children}
      <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white" type="submit">
        Run with AI
      </button>
    </form>
  );
};

export default FeatureForm;
