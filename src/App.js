import React from 'react';

import Post from './components/post/post.component';
import User from './components/user/user.component';

//import UseStateExample from './components/use-state-example/use-state-example.component';
//import UseEffectExample from './components/use-effect-example/use-effect-example.component';
import './App.css';

const App = props => {
  return <div>
          <Post /><br/>
          <User />
        </div>
};

export default App;
