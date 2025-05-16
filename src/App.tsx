import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <main className="p-6 space-y-4">
      <Navbar />

      {/* Color Test Block */}
      <section className="space-y-2">
        <div className="bg-crimson text-white p-4 rounded">Crimson Background</div>
        <div className="bg-muted-teal text-black p-4 rounded">Muted Teal Background</div>
        <div className="bg-navy text-white p-4 rounded">Navy Background</div>
        <div className="bg-cream text-black p-4 rounded">Cream Background</div>
      </section>

      <Hero />
    </main>
  );
}

export default App;
