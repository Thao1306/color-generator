import './App.css';
import React, { useState } from 'react'
import Values from "values.js";
import SingleColor from './SingleColor';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [weight, setWeight] = useState(10);
  const [list, setList] = useState(new Values('#f15025').all(weight));
  const basicColor = ['#000000', '#C0C0C0', '#808080', '#800000', '#FF0000', '#800080', '#FF00FF', '#008000', '#00FF00', '#808000', '#FFFF00', '#000080', '#0000FF', '#008080', '#00FFFF']
  const title1 = "ColorsGenerator";
  const titleColor = basicColor.map((item, index) => {
    return { color: item, letter: [...title1][index] }
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(weight);
      setList(colors)
      setError(false)
    } catch (e) {
      setError(true)
      setList([])
    }

  }

  return (
    <>
      <section className='form mt-5 text-center container'>
        <h1>
          {titleColor.map((item, index) => {
            return <span style={{ color: item.color }}>{item.letter}<span style={{ display: `${index === 5 ? "inline" : "none"}` }}>&nbsp;</span></span>
          })}
        </h1>
        <form onSubmit={handleSubmit} className='mt-5 d-flex'>
          <input className='form-control ' type='text' value={color} onChange={(e) => { setColor(e.target.value) }} placeholder='#f15025'></input>
          <select className="form-select ms-5" aria-label="Default select example" defaultValue="default" onChange={(e) => { setWeight(e.target.value * 1) }} >
            <option value="default" >Choose the weight (default 10)</option>
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10" >10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <button className='button btn ms-5'>submit</button>
        </form>
        <p className={`${error ? 'd-block' : 'd-none'} invalid-feedback  fs-4`}>Please type hexadecimal RGB value: #RGB #RRGGBB</p>
      </section>
      <section >
        <div className='colors mt-5'>
          {list.map((color, index) => {
            return <SingleColor key={index} {...color} index={index} hexColor={color.hex} numColor={list.length} />

          })}
        </div>

      </section>
    </>
  );
}

export default App;
