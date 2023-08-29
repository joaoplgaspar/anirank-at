import DefaultPage from "components/DefaultPage"
import Home from "pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pesquisa from "pages/Pesquisa"
import AnimePage from "pages/AnimePage"
import Explorar from "pages/Explorar"
import NaoEncontrada from "pages/NaoEncontrada"
import MinhaLista from "pages/MinhaLista"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />}/>
          <Route path="/explorar" element={<Explorar />}/>
          <Route path="/minha-lista" element={<MinhaLista />}/>
          <Route path="/search/:nomeanime" element={<Pesquisa />}/>
          <Route path="/anime/:id" element={<AnimePage />}/>
          <Route path="/anime/meu-rank" element={<AnimePage />}/>
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
