import './App.css'
import kanjiMaster from './images/kanji master.jpg'

function App() {
  return (
    <div className="bg-blue-700 text-white h-screen flex flex-col items-center justify-center gap-4">
      <p className="text-2xl">こんにちは!Web サイトを更新しました</p>
      <img src={kanjiMaster} alt="Kanji Master" className="w-80 rounded-lg" />
    </div>
  )
}

export default App