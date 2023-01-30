import TagCloud from '@frank-mayer/react-tag-cloud';
import { skills } from '../../helpers/constants';

const RotatingText = () => {
  return (
    <TagCloud
      options={{
        radius: 300,
        maxSpeed: 'normal',
        initSpeed: "normal",
        keep: true,
      }}
      onClickOptions={{ passive: true }}
    >
      {skills}
    </TagCloud>
  );
};

export default RotatingText;