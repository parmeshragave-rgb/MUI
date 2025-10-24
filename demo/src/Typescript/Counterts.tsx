import React, { useState } from "react";
 
type CounterProps = {
  prefix: string;
};
function Counterts({ prefix }: CounterProp) {
  const [count, setCount] = useState<number>(0); 
  const [name, setname] = useState<string>(''); 



  return (
    <div>
      <p>Count: {count}</p>
      <p>name: {prefix}{name}</p>

<input type="text" onChange={(e) => setname(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
export default Counterts
