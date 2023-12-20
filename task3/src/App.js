import Button from './Button';
import { useState } from 'react';
import './App.css';

function App() {
  
  const [val1 ,setVal1]=useState(0);
  
  const handleAllButtonClick = (value) => {
    console.log('handleAllButtonClick value ',value)
    setVal1(val1+value);
    
  } 
 
  const arr1 = [7,8,9];
  const button1 =arr1.map((num)=>{
    console.log('num',num);
   return < Button btn ={num} btFun={handleAllButtonClick}/>
  });



  const arr2 = [4,5,6];
  const button2 =arr2.map(num=>{
    return < Button btn ={num} btFun={handleAllButtonClick}/>
   });

  const arr3 = [1,2,3];
  const button3 =arr3.map(num=>{
   return < Button btn ={num} btFun={handleAllButtonClick}/>
  });
  const arr4 = ['.',0,'='];
  const button4 =arr4.map(num=>{
    return < Button btn ={num} btFun={handleAllButtonClick}/>
   });

const arr5 = ['×'];
  const button5 = arr5.map((op) => {
    console.log('op',op)
    return <Button btn={op} btFun={handleAllButtonClick}/>
  })
   
 const arr6 = ['÷'];
 const button6 = arr6.map((op) => {
  console.log('op',op)
  return <Button btn={op} btFun={handleAllButtonClick}/>
})

  const arr7 = ['+'];
  const button7 = arr7.map((op) => {
    console.log('op',op)
    return <Button btn={op} btFun={handleAllButtonClick}/>
  })

  const arr8 = ['-'];
  const button8 = arr8.map((op) => {
    console.log('op',op)
    return <Button btn={op} btFun={handleAllButtonClick}/>
  })
  

  
   
   

  return (
    <div className="App">
      <br/>
      <div>
        <input type ="text"  value ={val1} onChange={(e)=>setVal1(parseInt(e.target.value))} autoFocus/> 
        
        
        </div>
        <br/><br/>
        <div> {button1 }{button5} </div>
        <div> {button2}{button6}   </div>
        <div> {button3}{button7}   </div>
        <div> {button4}{button8}  </div>
        
   <br/>

    </div>
  );
}

export default App;