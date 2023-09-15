import React from 'react'


import Home from "../../views/exemples/Home";
import About from "../../views/exemples/About";
import State from '../../views/State';
import Effect from '../../views/Effect';
import NotFound from '../../views/exemples/NotFound';

import Callback from '../../views/Callback'
import Context from '../../views/Context'
import Hook from '../../views/Hook'
import Memo from '../../views/Memo'
import Reducer from '../../views/Reducer'
import Ref from '../../views/Ref'


import { Routes, Route } from "react-router-dom";

const Content = props => {
  return (
    <main className="content">
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/state" element={<State />} />

        <Route path="/effect" element={<Effect />} />

        <Route path="/callback" element={<Callback />} />

        <Route path="/context" element={<Context />} />

        <Route path="/hook" element={<Hook />} />

        <Route path="/memo" element={<Memo />} />

        <Route path="/reducer" element={<Reducer />} />

        <Route path="/ref" element={<Ref />} />

        <Route path="*" element={<NotFound />} />


      </Routes>
    </main>
  );
};

export default Content

