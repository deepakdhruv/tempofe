
import './App.css'
import Main from './components/main'
import Header from './components/header'
import QuestionComponent from './components/questions'
import Footer from './components/Footer'
import QCombineComponent from './components/centre'
import FilterComponent from './components/filter'
function App() {


  return (
    <>
   <Header/>
   <Main/>
   
   <QCombineComponent/>
   <FilterComponent/>
   <QuestionComponent/>
   <Footer/>
   </>
  )
}

export default App
