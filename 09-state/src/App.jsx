import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '40px' }}>
      <h1>This is a counter</h1>
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App