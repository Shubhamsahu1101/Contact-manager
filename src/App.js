import './App.css';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('currentList')) ? (
      JSON.parse(localStorage.getItem('currentList'))
    ) : (
      [
        {
          name:"Jake Moss",
          email:"jakem@gmail.com",
          id: uuidv4()
        },
        {
          name:"David Grey",
          email:"davidg@gmail.com",
          id: uuidv4()
        },
      ]
    ));

  return (
    <div className="App">
      <Header />
      <List contacts={contacts} setContacts={setContacts} length={contacts.length} />
      <Footer length={contacts.length} />
    </div>
  );
}

export default App;
