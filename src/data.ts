// data.ts
export interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: "Manzana" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Naranja" },
  { id: 4, name: "Pera" },
  { id: 4, name: "Mandarina" }
];

export default items;