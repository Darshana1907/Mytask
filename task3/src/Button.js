


const Button = (props) => {

    

    return (
      <button onClick={()=>props.btFun(props.btn)}>{props.btn }</button>
      
    );
  };
  
  export default Button;