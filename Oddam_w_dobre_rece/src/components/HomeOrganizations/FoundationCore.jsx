import "/src/scss/styles/_FoundationItem.scss";

const FoundationCore = ({ fundType, name, mission, assets }) => {
  return (
    <div className="foundationBox">
      <div className="foundationTitle">
        <span>
          {fundType}"{name}"
        </span>
        <p>{mission}</p>
      </div>
      <p className="foundationCollects">{assets}</p>
    </div>
  );
};

export default FoundationCore;
