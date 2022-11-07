import './App.css';
import AboutUs from "./componets/aboutUs/AboutUs";
import PortfolioPage from "./componets/portfolioPage/PortfolioPage";
import ContactsPage from "./componets/contactPage/ContactPage";

function App () {

  return(
      <>
        <div className="app">
          <AboutUs/>
          <PortfolioPage/>
          <ContactsPage/>
        </div>
      </>
  )
}

export default App;