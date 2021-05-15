import '../App.sass';
import { HiStar } from "react-icons/hi";

export const ContrastRatio = () => {
  return (
    <div className="contrastContainer">

      <div className="contrastTop">
        <h1 className="contrastRatioNum">9.00</h1>
        <div className="contrastScore">
          <h1 className="scoreTitle">Very Good</h1>
          <div className="stars">
            <HiStar size={24} />
            <HiStar size={24} />
            <HiStar size={24} />
            <HiStar size={24} />
            <HiStar size={24} />
          </div>
        </div>
      </div>

      <div className="contrastBottom">
        <div className="smallTextScore">
          <h1 className="smallTextTitle">Small trext</h1>
          <div className="stars">
            <HiStar size={20} />
            <HiStar size={20} />
            <HiStar size={20} />
          </div>
        </div>
        <div className="largeTextScore">
          <h1 className="smallTextTitle">Large trext</h1>
          <div className="stars">
            <HiStar size={20} />
            <HiStar size={20} />
            <HiStar size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}