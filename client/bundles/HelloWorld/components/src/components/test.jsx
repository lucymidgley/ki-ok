import React, { useState } from 'react';

export const Test = () => {
  const [name, setName] = useState('asd');

  return (
    <div>
      at last {name}
    </div>
  );
};

