import avatar from '../../assets/avatar.png';
import useDataContext from '../../hooks/useDataContext';
const TIMEFRAME_VALUES = ['daily', 'weekly', 'monthly'];

const UserSection = () => {
  const { setTimeFrame, timeFrame } = useDataContext();
  const handleTimeFrame: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTimeFrame(e.currentTarget.value);
  };
  const periods = TIMEFRAME_VALUES.map((tf, i) => {
    const checked = timeFrame === tf;
    return (
      <div key={i} className="period">
        <input
          type="radio"
          id={tf}
          name="period"
          value={tf}
          onChange={handleTimeFrame}
          checked={checked}
        />
        <label htmlFor={tf}>{tf}</label>
      </div>
    );
  });
  return (
    <section className="user__section">
      <div className="user__data">
        <div className="avatar__container">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="user__data__wrapper">
          <p>Report for</p>
          <h2>Stacey Castillo</h2>
        </div>
      </div>
      <div className="user__period">{periods}</div>
    </section>
  );
};

export default UserSection;
