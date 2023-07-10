export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some item to your packing list🚀</em>
      </footer>
    );
  }
  const numItems = items.length;
  const packedLength = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedLength / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything, Ready to go ✈️"
          : ` 🧳 You have ${numItems} items on your list,and you already packed
        ${packedLength} (${percentage}%)`}
      </em>
    </footer>
  );
}
