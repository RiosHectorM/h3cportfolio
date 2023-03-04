'use client';

const Contact = ({ item, imgUrl }) => (
  <>
    <div
      className="justify-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D] items-center"
    >
      <img src={imgUrl} alt="icon" className="w-[90%] h-[90%] object-contain" />
    </div>
    <p className="pl-2 font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
      {item}
    </p>
  </>
);

export default Contact;
