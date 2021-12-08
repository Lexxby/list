import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ненужный текст', price: '200' },
    { id: 1, value: 4, name: 'Ложка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 3, name: 'Кастрюля' },
    { id: 4, value: 0, name: 'Черпак' },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((x) => x.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = (id) => {
    const newCounters = [...counters];
    for (let i = 0; i < newCounters.length; i++) {
      if (newCounters[i].id === id) {
        newCounters[i].value = newCounters[i].value + 1;
      }
    }
    setCounters(newCounters);
  };
  const handleDicrement = (id) => {
    const newCounters = [...counters];
    for (let i = 0; i < newCounters.length; i++) {
      if (newCounters[i].id === id) {
        newCounters[i].value = newCounters[i].value - 1;
      }
    }
    setCounters(newCounters);
  };

  return (
    <div>
      {counters.map((count) => (
        <Counter key={count.id} {...count} onDelete={handleDelete} onIncrement={handleIncrement} onDicrement={handleDicrement} />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </div>
  );
};

export default CountersList;
