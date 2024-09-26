const app = () => {
  const arr = ["Bob", "Jimmy", "Timmy", "AaaA"];
  return (
    <div>
      {arr.map((element) => (
        <div key={element}>{element}</div>
      ))}
    </div>
  );
};

export default app;
