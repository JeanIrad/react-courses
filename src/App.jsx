import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  return (
    <>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </>
  );
}
function Logo() {
  return <h1> 🌴 Far Away 📦</h1>;
}
function Form() {
  return (
    <form className="add-form">
      <h3>What do you need 😍 for your trip?</h3>
      <select name="item" id="item">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item ...." />
      <button type="submit">Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      📦You have x items on your list and you already packed X %{" "}
    </footer>
  );
}

export default App;