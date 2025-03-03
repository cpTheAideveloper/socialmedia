// File: src/components/ui/FrequencySelector.tsx
'use client';
import { Dispatch, SetStateAction } from 'react';

interface FrequencySelectorProps {
  frequency: string;
  setFrequency: Dispatch<SetStateAction<string>>;
}

export default function FrequencySelector({ frequency, setFrequency }: FrequencySelectorProps) {
  const frequencies = ['Daily', 'Three times a week', 'Weekly'];

  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Frequency:</label>
      <div className="flex gap-2">
        {frequencies.map((freq) => (
          <button
            key={freq}
            onClick={() => setFrequency(freq)}
            className={`border px-3 py-1 rounded ${frequency === freq ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
          >
            {freq}
          </button>
        ))}
      </div>
    </div>
  );
}