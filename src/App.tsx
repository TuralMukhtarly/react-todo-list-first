import React from 'react';
import './App.css';
import OnOff from './components/OnOff/OnOff';
import Accordion from './components/Accordion';
import Rating from './components/Rating';

function App() {
  return (
    <div>
      <PageTitle pageTitle={" This is app components"} />
      <PageTitle pageTitle={"My friend!"} />
      <OnOff on={false} />
      <Accordion titleValue={"Menu"} collapsed={false} />
      {/* <Accordion titleValue={"Users"} collapsed = {true}/> */}


      <Rating />

    </div>
  );
}

function PageTitle(props: any) {
  return (
    <div>
      delete me
      {props.pageTitle}
    </div>

  )
}

export default App;
