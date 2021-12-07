import './App.css';
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import MiddleSection from './components/MiddleSection';
import RightSideBar from './components/RightSideBar';

function App() {
  return (
    <>
      <Header/>
      <LeftSideBar/>
      <RightSideBar/>
      <MiddleSection/>
    </>
  );
}

export default App;
