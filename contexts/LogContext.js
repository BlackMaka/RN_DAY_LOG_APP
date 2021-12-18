import React from 'react';
import {createContext, useState} from 'react';
import {v4 as uuid4} from 'uuid';
const LogContext = createContext();

export function LogContextProvider({children}) {
  //   const [logs, setLogs] = useState([]);
  const [logs, setLogs] = useState(
    Array.from({length: 10})
      .map((_, index) => ({
        id: uuid4(),
        title: `Log ${index}`,
        body: `Log ${index}`,
        date: new Date().toISOString(),
      }))
      .reverse(),
  );
  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuid4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };
  const onModify = modified => {
    const nextLog = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLog);
  };
  const onRemove = id => {
    const nextLog = logs.filter(log => log.id !== id);
    setLogs(nextLog);
  };
  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
