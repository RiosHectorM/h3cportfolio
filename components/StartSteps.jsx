import styles from '../styles';

const StartSteps = ({ text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} h-[70px] w-full rounded-[24px] bg-[#323f5d]`}
    >
      <p className="font-bold text-[20px] text-white">{text}</p>
    </div>
  </div>
);

export default StartSteps;
