import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from '../src/components/QuoteCard';



function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCard 
      image='https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523' 
      character='Ralph Wiggum'
      quote="Me fail English? That's unpossible"
     />
      <QuoteCard
      image='https://upload.wikimedia.org/wikipedia/en/c/c6/Nelson_Muntz.PNG' 
      character='Nelson Muntz'
      quote="Shoplifting is a victimless crime, like punching someone in the dark." />
    </div>
    
  );
}


export default App;
