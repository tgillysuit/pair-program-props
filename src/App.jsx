import './App.css'

function App() {
  const hobbyList = [
    { name: 'Hiking', description: 'Hiking through the Cascade Mountains' },
    { name: 'Traveling', description: "Exploring the world at it's finest" },
    { name: 'Video Gaming', description: 'Playing online video games with friends.' },
  ];

  // Rendering the Hobbies Component
  return (
    <div>
      <h1>My Hobbies</h1>
      <Hobbies hobbies={hobbyList} />
    </div>
  )
}

export default App
