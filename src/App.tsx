import './App.css'
import kanjiMaster from './images/kanji master.jpg'

function App() {
  const words = ["Let's", 'Play', 'Kanji', 'Tests!']

  return (
    <div className="relative w-screen h-dvh overflow-hidden">
      <img
        src={kanjiMaster}
        alt="Kanji Master"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="font-['Yuji_Syuku'] flex flex-wrap justify-center gap-3 md:gap-5 px-4 text-yellow-400 text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {word}
            </span>
          ))}
        </h1>
      </div>
    </div>
  )
}

export default App