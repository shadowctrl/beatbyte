import "./loading.css";
const LoadingSpinner = () => {
  return (
    <div className="loadingParent">
      <div className="spinnerContainer">
        <div className="spinner" />
      </div>
      <p className="loadingText">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
