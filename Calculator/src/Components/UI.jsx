import React, { useState } from 'react'
import '../App.css';

export default function UI() {
    const [input,setInput]=useState('');
    const [val,setVal]=useState('');


    function display(val){
        //console.log(val)
        setInput(prev=>prev+val);
    }

    function clear(){
        setInput('');
    }

    function del(){
        setInput(Math.floor(input/10));
        console.log(input)
    }

    function solve(){
        const inputs=input;
        setInput(eval(inputs));
    }


  return (
    <div className='container'>
        <div className='inputs'>
            <input type='text'className='inpus' placeholder='Enter' value={input} onChange={()=>display()}></input>
        </div>

        <div className="subContainer1">
            <div className="item1" onClick={clear}>AC</div>
            <div className="item1" onClick={del}>DEL</div>
            <div className="item1" onClick={()=>display('.')}>.</div>
            <div className="item1" onClick={()=>display("+")}>+</div>
        </div>

        <div className="subContainer2">
            <div className="item2" onClick={()=>display('1')}>1</div>
            <div className="item2" onClick={()=>display('2')}>2</div>
            <div className="item2" onClick={()=>display('3')}>3</div>
            <div className="item2" onClick={()=>display('-')}>-</div>
        </div>

        <div className="subContainer3">
            <div className="item3" onClick={()=>display('4')}>4</div>
            <div className="item3" onClick={()=>display('5')}>5</div>
            <div className="item3" onClick={()=>display('6')}>6</div>
            <div className="item3" onClick={()=>display('*')}>*</div>
        </div>

        <div className="subContainer4">
            <div className="item4" onClick={()=>display('7')}>7</div>
            <div className="item4" onClick={()=>display('8')}>8</div>
            <div className="item4" onClick={()=>display('9')}>9</div>
            <div className="item4" onClick={()=>display('/')}>/</div>
        </div>

        <div className="subContainer5">
            <div className="item5" onClick={()=>display('00')}>00</div>
            <div className="item5" onClick={()=>display('0')}>0</div>
            <div className="item5" onClick={solve}>=</div>
            <div className="item5" onClick={()=>display('%')}>%</div>
        </div>

    </div>
  )
}
