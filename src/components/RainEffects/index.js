import classes from './RainEffects.module.css';

const RainEffects = () => {
  return (
    <div className={classes.rainDiv}>
      {([...Array(200)]).map((res) => (
        <span key={res} style={{ animationDuration: `calc(15s / ${Math.floor(Math.random() * (15 - 11 + 1)) + 11})` }}></span>
      ))}
    </div>
  );
};

export default RainEffects;