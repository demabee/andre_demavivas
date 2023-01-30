import classes from './SnowEffect.module.css';

const SnowEffect = () => (
  <div className={classes.snowDiv}>
    {([...Array(50)]).map((res) => (
      <div className={classes.snowflake} />
    ))}
  </div>
);

export default SnowEffect;