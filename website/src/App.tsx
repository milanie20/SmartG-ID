import { useState } from 'react';

// Make sure these paths match where you saved your files! 
// If you put them in the components folder, change './FAQ.tsx/...' to './components/...'
import Home from './components/Home';
import History from './components/History';
import Team from './components/Team';
import FAQ from './components/FAQ';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'History', id: 'history' },
  { name: 'Team', id: 'team' },
  { name: 'FAQ', id: 'faq' },
];

export default function App() {
  // This state tracks which page is currently active. We start on 'home'.
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      
      {/* 1. Sticky Sidebar Navigation */}
      <aside className="sticky top-0 left-0 h-screen w-64 bg-white px-8 py-10 flex flex-col border-r border-slate-100 shrink-0">
        
        {/* Logo / Project Name */}
        <div className="mb-12 flex items-center gap-3">
          <div className="text-3xl text-slate-800">🍃</div> 
          <h1 className="text-xl font-serif font-bold text-[#7a1f3d]">
            Smart G-ID
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            
            return (
              <button
                key={link.name}
                onClick={() => setActiveTab(link.id)}
                className={`text-left text-base transition hover:text-[#7a1f3d] ${
                  isActive
                    ? 'font-bold text-slate-950'
                    : 'text-slate-500 font-medium'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 w-full bg-white relative">
        {/* We conditionally render the page based on which tab is active */}
        {activeTab === 'home' && <Home />}
        {activeTab === 'history' && <History />}
        {activeTab === 'team' && <Team />}
        {activeTab === 'faq' && <FAQ />}
      </main>

    </div>
  );
}