import React, { useState, useEffect } from "react";
import { Item } from "../Type/items";
import { getFrutas } from "../Data/frutasRepository";

const ListBox: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const frutas = await getFrutas();
      setItems(frutas);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Selecciona una fruta:</h2>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        style={{ width: "200px", padding: "5px" }}
      >
        <option value="">-- Selecciona --</option>
        {items.map((item) => (
          <option key={item.id} value={item.Nombre}>
            {item.Nombre}
          </option>
        ))}
      </select>

      {selected && <p>Has seleccionado: {selected}</p>}
    </div>
  );
};

export default ListBox;