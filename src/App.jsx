const App = () => {
  return (
    <div className="prose">
      <h1>Vite + React + TailwindCSS + daisyUI</h1>
      <p>React Template for Unieum</p>
      <p className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick a file</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </p>
    </div>
  );
};

export default App;
