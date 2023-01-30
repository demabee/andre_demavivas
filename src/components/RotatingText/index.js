import { useEffect } from 'react';
import TagCloud from 'TagCloud';
import { skills } from '../../helpers/constants';

const RotatingText = ({ isTablet }) => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        ...skills
      ];
      const options = {
        radius: 300,
        maxSpeed: 'normal',
        initSpeed: "normal",
        keep: true,
        containerClass: "tagcloudTablet"
      };

      TagCloud(container, texts, options);
    };
  }, []);
  
  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default RotatingText;