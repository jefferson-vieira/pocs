import React, { useContext } from "react";

import historyContext from "contexts/history";

const History: React.FC = () => {
  const history = useContext(historyContext);

  return (
    <div>
      <h3>Histórico</h3>
      <ul>
        {history.length
          ? history.map(h => <li key={h.id}>{h.name}</li>)
          : "Vazio!"}
      </ul>
    </div>
  );
};

export default History;
