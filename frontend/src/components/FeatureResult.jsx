const FeatureResult = ({ title, data }) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <pre className="mt-2 whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FeatureResult;
