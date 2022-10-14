import { Navbar, Banner, Trending, About, Roadmap, Team, Gallery, Search, Detail } from './components'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Trending />
            <About />
            <Roadmap />
            <Team />
            <Gallery />
            <Search />
          </>
        } />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App;
