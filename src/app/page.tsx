// File: src/app/page.tsx
'use client'
import { useState } from 'react';
import IndustrySelector from '@/components/ui/IndustrySelector';
import FrequencySelector from '@/components/ui/FrequencySelector';
import TypeSelector from '@/components/ui/TypeSelector';
import AdditionalIdeas from '@/components/ui/AdditionalIdeas';
import GenerateButton from '@/components/ui/GenerateButton';
import IdeasList from '@/components/ui/IdeasList';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { ContentPlanner } from '@/types';

export default function Page() {
  const [industry, setIndustry] = useState('');
  const [frequency, setFrequency] = useState('');
  const [contentType, setContentType] = useState('');
  const [extraIdeas, setExtraIdeas] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [ideas, setIdeas] = useState<ContentPlanner.Idea[]>([]);

  const handleGenerateIdeas = async () => {
    try {
      setIsLoading(true);
      setIdeas([]);

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industry, frequency, contentType, extraIdeas }),
      });
      if (!response.ok) {
        throw new Error('Error generating ideas');
      }

      const data = await response.json();
      setIdeas(data.ideas || []);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Content Planner</h1>
      <IndustrySelector industry={industry} setIndustry={setIndustry} />
      <FrequencySelector frequency={frequency} setFrequency={setFrequency} />
      <TypeSelector contentType={contentType} setContentType={setContentType} />
      <AdditionalIdeas extraIdeas={extraIdeas} setExtraIdeas={setExtraIdeas} />
      <GenerateButton onClick={handleGenerateIdeas} disabled={!industry || !frequency || !contentType || isLoading} />
      {isLoading && <LoadingSpinner />}
      {ideas.length > 0 && <IdeasList ideas={ideas} />}
    </main>
  );
}