import './App.css';
import { Contacts } from './Contacts/Contacts';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { MySkills } from './MySkills/MySkills';
import { Projects } from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <MySkills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
