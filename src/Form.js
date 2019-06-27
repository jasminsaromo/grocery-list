import React, {useRef} from 'react';

const Form = ({onSubmit}) => {

  const nRef = useRef();
  const tRef = useRef(null);
  const qRef = useRef(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: nRef.current.value, 
      type: tRef.current, 
      quantity: qRef.current,
    };
    onSubmit(item);
    
  }


  return (
   <form id="newItem" className="newitem" auto-complete="off" onSubmit={handleSubmit}>
     <label htmlFor="itemName" className="line-label">New Item</label>
     <div className="addnew">
       <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?" ref={nRef} />
       <input type="submit" value="Add" className="form-component btn" />
     </div>
   </form>
  );
};

export default Form;
