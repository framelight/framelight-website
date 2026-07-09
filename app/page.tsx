import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Demo } from './components/Demo';
import { UseCases } from './components/UseCases';
import { Techniques } from './components/Techniques';
import { Integrations } from './components/Integrations';
import { Socials } from './components/Socials';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#2d2d2d] selection:bg-[#2d2d2d] selection:text-[#f5f1eb] overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Demo />
        <UseCases />
        <Techniques />
        <Integrations />
        <Socials />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
