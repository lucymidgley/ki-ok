import React, { FC, useState } from 'react';
import { Test } from './src/components/test'

type Props = {
  str: string
}

const HelloWorld: FC<Props> = ({ str }) => {
  const [name, setName] = useState<string>(str);

  return (
    <div>
      <h3>Hello, {name}!</h3>
      <Test />
      <hr />
      <form>
        <label htmlFor="name">
          Say hello to:
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </form>
    </div>
  );
};


export default HelloWorld;
