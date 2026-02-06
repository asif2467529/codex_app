export const callFeature = async (featureKey, payload) => {
  // TODO: Integrate with Grok/Gemini/OpenAI/etc using provider-specific SDK.
  // This demo returns deterministic mock data for each feature.
  switch (featureKey) {
    case 'smart-note':
      return {
        title: 'ডিজিটাল নোট',
        headings: ['মূল ধারণা'],
        subHeadings: ['উপশিরোনাম'],
        bulletPoints: ['মূল পয়েন্ট ১', 'মূল পয়েন্ট ২'],
        highlights: ['গুরুত্বপূর্ণ লাইন'],
        payloadSummary: payload?.text || null,
      };
    case 'summary':
      return {
        summary: 'এটি অধ্যায়ের সংক্ষিপ্ত বাংলা সারাংশ।',
        bullets: ['বুলেট ১', 'বুলেট ২'],
        possibleExamQuestions: ['প্রশ্ন ১', 'প্রশ্ন ২'],
      };
    case 'mcq':
      return [
        {
          question: 'প্রশ্ন ১',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 'A',
          explanation: 'ব্যাখ্যা এখানে।',
        },
      ];
    case 'translate':
      return {
        translatedText: payload?.text || '',
        mode: payload?.mode,
      };
    default:
      return {
        message: 'Mock response generated.',
        featureKey,
        payload,
      };
  }
};
