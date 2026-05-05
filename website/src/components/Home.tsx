import { useState } from 'react';

export default function Home() {
  // State to control if the search bar is open or closed
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // State to hold whatever the user types into the search box
  const [searchQuery, setSearchQuery] = useState('');

  // What happens when you press 'Enter'
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`You searched for: "${searchQuery}" \n\n(We can connect this to real search logic later!)`);
      setSearchQuery(''); // Clear the input after searching
    }
  };

  return (
    <div className="w-full flex flex-col bg-white">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-slate-900 shrink-0">
        {/* Background Image with a dark overlay so text is readable */}
        <div 
          className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop')" 
          }} 
        />

        {/* Top Right Working Search Bar */}
        <div className="absolute top-8 right-8 z-20 flex items-center">
          {isSearchOpen ? (
            <form 
              onSubmit={handleSearch} 
              className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/40 shadow-lg transition-all"
            >
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white placeholder-slate-200 outline-none w-48 md:w-64"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="button" 
                onClick={() => setIsSearchOpen(false)} 
                className="text-white ml-2 hover:text-slate-300 transition-colors"
                title="Close search"
              >
                {/* Close 'X' icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </form>
          ) : (
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="text-white hover:opacity-75 transition-opacity p-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
              title="Open search"
            >
              {/* Magnifying Glass icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          )}
        </div>

        {/* Main Centered Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto pb-20">
          
          {/* Main Title (Short and Punchy) */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 tracking-wide text-slate-50">
            Smart G-ID
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-base md:text-lg lg:text-xl font-serif mb-6 tracking-wide leading-relaxed text-slate-200">
            Design and Development of a Goat Profiling and Trading System <br className="hidden md:block" /> for Direct Farmer-to-Consumer Transactions
          </h2>

          {/* One-Line Description */}
          <p className="text-sm md:text-base italic font-light opacity-90 text-slate-300 max-w-2xl mx-auto">
            A smart digital platform connecting goat farmers directly to consumers for transparent, secure, and middleman-free trading.
          </p>
        </div>
      </section>

      {/* 2. Mission Section */}
      <section className="w-full py-24 px-8 bg-white text-slate-800">
        <div className="max-w-5xl mx-auto">
          {/* Mission Headers */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#7a1f3d] mb-4">
              Mission of the project
            </h2>
            <p className="text-lg italic text-slate-500 font-light max-w-3xl mx-auto">
              To empower goat farmers through digital profiling technology and connect them directly with consumers, ensuring fair prices, high-quality livestock, and transparent trade.
            </p>
          </div>

          {/* Efforts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            {/* Effort 1 */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img 
                src="https://images.unsplash.com/photo-1592424001815-b7ed082161db?q=80&w=400&auto=format&fit=crop" 
                alt="Effort 1" 
                className="w-full sm:w-48 h-48 object-cover object-center bg-slate-100 rounded shadow-sm"
              />
              <div className="pt-2">
                <h3 className="font-bold text-xl mb-3 text-slate-900">Effort 1</h3>
                <p className="text-slate-500 leading-relaxed">
                  A description of an effort and why it matters
                </p>
              </div>
            </div>

            {/* Effort 2 */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img 
                src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=400&auto=format&fit=crop" 
                alt="Effort 2" 
                className="w-full sm:w-48 h-48 object-cover object-center bg-slate-100 rounded shadow-sm"
              />
              <div className="pt-2">
                <h3 className="font-bold text-xl mb-3 text-slate-900">Effort 2</h3>
                <p className="text-slate-500 leading-relaxed">
                  A description of an effort and why it matters
                </p>
              </div>
            </div>

            {/* Effort 3 */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-48 h-48 bg-slate-50 border border-slate-200 border-dashed shrink-0 rounded" />
              <div className="pt-2">
                <h3 className="font-bold text-xl mb-3 text-slate-900">Effort 3</h3>
                <p className="text-slate-500 leading-relaxed">
                  A description of an effort and why it matters
                </p>
              </div>
            </div>

            {/* Effort 4 */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-48 h-48 bg-slate-50 border border-slate-200 border-dashed shrink-0 rounded" />
              <div className="pt-2">
                <h3 className="font-bold text-xl mb-3 text-slate-900">Effort 4</h3>
                <p className="text-slate-500 leading-relaxed">
                  A description of an effort and why it matters
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Contact & Footer Section */}
      <section className="w-full py-24 px-8 bg-white border-t border-slate-100 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#7a1f3d] mb-4">
          Questions?
        </h2>
        <p className="text-lg italic text-slate-600 mb-10 font-light">
          Contact [email] to get more information on the project
        </p>
        
        <button className="bg-[#b52a5e] hover:bg-[#96234d] text-white px-12 py-3 rounded text-lg font-medium transition shadow-sm mb-24">
          Take action
        </button>

        {/* Footer Text */}
        <div className="text-slate-600 space-y-4">
          <p className="mb-8">
            [Email] &nbsp;|&nbsp; [Address] &nbsp;|&nbsp; [Phone number]
          </p>
          <p>
            Made with <a href="#" className="text-[#b52a5e] underline hover:text-[#7a1f3d]">Google Sites Templates</a>
          </p>
          <p>
            <a href="#" className="text-[#b52a5e] underline hover:text-[#7a1f3d]">Google Classroom</a>
          </p>
        </div>
      </section>

    </div>
  );
}