import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/master.css'
import { data } from './data';
import Header from './components/Header';
import Main from './components/Main';
import MenuList from './components/MenuList';

function App() {

  let categories = ['الكل', ...new Set(data.map(item => item.category))];

  let [checked, setChecked] = useState('الكل');
  let [shownItems, setShownItems] = useState(data);

  function changeCategory(event) {
    setChecked(event.target.innerHTML);
    filterItems(event.target.innerHTML)
  }

  function filterItems(checked) {
    if (checked === 'الكل') {
      setShownItems(data);
    } else {
      setShownItems(data.filter(i => i.category === checked));
    }
  }

  function search(query) {
    setShownItems(data.filter(item => new RegExp(query, "ig").test(item.title)));
  }

  return (
    <>
      <Header search={search} />
      <Main categories={categories} checked={checked} changeCategory={changeCategory} />
      <MenuList shownItems={shownItems} />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
