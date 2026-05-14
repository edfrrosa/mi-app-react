import React, { useState } from "react";
import items, { Item } from "../data";

const ListBoxJson: React.FC = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <div>
      <h2>Selecciona una fruta:</h2>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        style={{ width: "200px", padding: "5px" }}
      >
        <option value="">-- Selecciona --</option>
        {items.map((item: Item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      {selected && <p>Has seleccionado: {selected}</p>}
    </div>
  );
};

export default ListBoxJson;

