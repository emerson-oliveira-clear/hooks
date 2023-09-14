import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


import Home from './views/exemples/Home'
import State from './views/State/index'
import Effect from './views/Effect/index'
import Callback from './views/Callback/index'
import Context from './views/Context/index'

import Hook from './views/Hook/index'

import Memo from './views/Memo/index'

import Reducer from './views/Reducer/index'

import Ref from './views/Ref/index'





const Router = () => {
  return (
    <BrowserRouter>
     <Routes>

<Route exact path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/state" element={<State />} />

<Route path="/effect" element={<Effect />} />

<Route path="/callbeck" element={<Callback />} />

<Route path="/context" element={<Context />} />

<Route path="/hook" element={<Hook />} />

<Route path="/memo" element={<Memo />} />

<Route path="/reducer" element={<Reducer />} />

<Route path="/ref" element={<Ref />} />

<Route exact path="*" element={<NotFound />} />


</Routes>
    </BrowserRouter>
  )
}
export default Router;