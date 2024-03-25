export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Your Items🧳 to Go</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((numPacked / numItems) * 100);
  // console.log(numPacked.length);
  return (
    <footer className="stats">
      {packedPercent !== 100
        ? `
        You have ${numItems} Items on your list and you have packed ${numPacked}
        items ${packedPercent}
        %`
        : "Done Let's Go ✈ "}
    </footer>
  );
}
