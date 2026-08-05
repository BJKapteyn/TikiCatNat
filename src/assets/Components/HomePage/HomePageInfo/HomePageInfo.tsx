import './HomePageInfo.css';

export const HomePageInfo: React.FC = () => {
  return (
    <div className="info-homePageInfo">
      <div className="info-grid">
        <div className="info-row">
          <div className="info-colorBox info-colorBox--one" />
          <div className="info-textBox">Sample text for row 1</div>
        </div>

        <div className="info-row">
          <div className="info-colorBox info-colorBox--two" />
          <div className="info-textBox">Sample text for row 2</div>
        </div>

        <div className="info-row">
          <div className="info-colorBox info-colorBox--three" />
          <div className="info-textBox">Sample text for row 3</div>
        </div>
      </div>
    </div>
  );
}

