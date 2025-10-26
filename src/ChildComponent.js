function ChildComponent({ message, myNumber, isActive, onChildClick }) {
  return (
    <div style={{ border: '1px dashed orange', padding: '10px', margin: '10px', backgroundColor: '#fffbe0' }}>
      <h3>Child Component</h3>
      <p>Message from Parent: <strong>{message}</strong></p>
      <p>Number from Parent: <strong>{myNumber}</strong></p>
      {isActive && <p style={{ color: 'green' }}>The 'isActive' prop is true!</p>}
      <p>
        Parent's Callback: <button onClick={() => onChildClick("Data from Child!")}>Click Me (Child)</button>
      </p>
    </div>
  );
}