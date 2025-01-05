import Chai from "./chai"

function App() {
  const username ="chai aur code"

  return (
    // return expression ke andar only final evaluated outcome hi likhte hai
    
    <>
      <Chai/>
      <h1>chai aur react with {username}</h1> 
      {/* this is how to write a variable */}
      <p>Lorem, ipsum dolor.</p>

    </>
  )
};

export default App;
