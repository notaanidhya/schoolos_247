import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ProofBar from '@/components/home/ProofBar';
import ProblemsSection from '@/components/home/ProblemsSection';
import SolutionSection from '@/components/home/SolutionSection';
import ModulesSection from '@/components/home/ModulesSection';
import HowItWorks from '@/components/home/HowItWorks';
import ComparisonSection from '@/components/home/ComparisonSection';
import IntegrationsTeaser from '@/components/home/IntegrationsTeaser';
import PricingTeaser from '@/components/home/PricingTeaser';
import DemoCtaSection from '@/components/home/DemoCtaSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata: Metadata = {
  title: 'School247 — Run Your School Smarter. Not Harder.',
  description:
    'The AI Operations Layer for Schools. Bring school administration, parent communication, attendance and everyday workflows together in one intelligent platform.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofBar />
      <ProblemsSection />
      <SolutionSection />
      <ModulesSection />
      <HowItWorks />
      <ComparisonSection />
      <IntegrationsTeaser />
      <PricingTeaser />
      <DemoCtaSection />
      <FaqSection />
    </>
  );
}
