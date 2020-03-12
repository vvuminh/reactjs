// import React, {useState} from 'react';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import 'antd/dist/antd.css';
// import ListData from './screens/ListData';
// import AddItem from './screens/AddItem';
// import ListData2 from './screens/ListData2';
// import AddItem2 from './screens/AddItem2';
import ListData3 from './screens/ListData3';
// import Container from './screens/container';
import AddItem3 from './screens/AddItem3';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  rootReducer from './reducers';

const store = createStore(rootReducer)

function App() {

  // C1
  // const [data, setdata] = useState([]);

  // const add = (value) => {
  //   console.log('asdfafd', value)
  //   setdata(oldArray => [...oldArray, value]);
  // }

    return (
      <div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path='/list-data' >
                {/* <ListData data={data}/> */}
                {/* <ListData2 /> */}
                <ListData3 />
                {/* <Container /> */}
              </Route>
              <Route path='/add-item'>
                {/* <AddItem action = {add}/> */}
                {/* <AddItem2 /> */}
                <AddItem3 />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
}

export default App;
