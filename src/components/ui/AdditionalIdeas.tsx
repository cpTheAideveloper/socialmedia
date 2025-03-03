// File: src/components/ui/AdditionalIdeas.tsx
'use client';
import { Dispatch, SetStateAction } from 'react';

interface AdditionalIdeasProps {
  extraIdeas: string;
  setExtraIdeas: Dispatch<SetStateAction<string>>;
}

export default function AdditionalIdeas({ extraIdeas, setExtraIdeas }: AdditionalIdeasProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Additional Ideas (Optional):</label>
      <textarea
        className="border p-2 rounded w-full"
        rows={3}
        value={extraIdeas}
        onChange={(e) => setExtraIdeas(e.target.value)}
      />
    </div>
  );
}