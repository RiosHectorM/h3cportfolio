'use client';

const Contact = ({ item, imgUrl, url }) => (
  <>
    <div className="justify-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D] items-center text-center content-center">
      <img
        src={imgUrl}
        alt="icon"
        className="w-[90%] h-[90%] m-auto object-contain "
      />
    </div>
    <p className="pl-2 font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
      <a href={url} target="_blank" rel="noreferrer">
        {item}
      </a>
    </p>
  </>
);

export default Contact;
