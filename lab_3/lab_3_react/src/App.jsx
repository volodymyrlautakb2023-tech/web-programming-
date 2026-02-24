import Header from './components/Header'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Objective from './components/Objective'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">

      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-[320px_1fr] gap-8 flex-1">

        {/* Ліва колонка */}
        <aside className="space-y-8">
          <Education />
          <Achievements />
        </aside>

        {/* Права колонка */}
        <section className="space-y-8">
          <Objective />
          <Experience />
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export default App