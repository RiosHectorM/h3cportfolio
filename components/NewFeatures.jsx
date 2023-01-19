import styles from '../styles';

const NewFeatures = ({ imgUrl, title }) => (
  <div className="flex flex-row justify-between sm:flex-col sm:max-w-[250px] min-w-[210px] items-center sm:justify-center">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D] `}
    >
      <img src={imgUrl} alt="icon" className="w-[90%] h-[90%] object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      {title}
    </h1>
  </div>
);

export default NewFeatures;
