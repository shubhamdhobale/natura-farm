
const Button = () => {
  return (
    <button
      className="font-semibold text-white rounded-lg py-2 hover:py-5 cursor-pointer w-full border-none bg-[#70bdca] flex justify-center items-center relative overflow-hidden hover:shadow-2xl hover:bg-[#70bdca]"
      style={{ position: 'relative' }}
    >
      <style jsx>{`
        .span-mother {
          display: flex;
          overflow: hidden;
        }

        button:hover .span-mother {
          position: absolute;
        }

        button:hover .span-mother span {
          transform: translateY(1.2em);
        }

        .span-mother span:nth-child(1) {
          transition: 0.2s;
        }

        .span-mother span:nth-child(2) {
          transition: 0.3s;
        }

        .span-mother span:nth-child(3) {
          transition: 0.4s;
        }

        .span-mother span:nth-child(4) {
          transition: 0.5s;
        }

        .span-mother span:nth-child(5) {
          transition: 0.6s;
        }

        .span-mother span:nth-child(6) {
          transition: 0.7s;
        }

        .span-mother2 {
          display: flex;
          position: absolute;
          overflow: hidden;
        }

        .span-mother2 span {
          transform: translateY(-1.2em);
        }

        button:hover .span-mother2 span {
          transform: translateY(0);
        }

        .span-mother2 span:nth-child(1) {
          transition: 0.2s;
        }

        .span-mother2 span:nth-child(2) {
          transition: 0.3s;
        }

        .span-mother2 span:nth-child(3) {
          transition: 0.4s;
        }

        .span-mother2 span:nth-child(4) {
          transition: 0.5s;
        }

        .span-mother2 span:nth-child(5) {
          transition: 0.6s;
        }

        .span-mother2 span:nth-child(6) {
          transition: 0.7s;
        }
      `}</style>
      <span className="span-mother flex">
        <span className="transition-transform duration-200 mr-1">A</span>
        <span className="transition-transform duration-300 mr-1">D</span>
        <span className="transition-transform duration-400 mr-1">D</span>
        <span className="transition-transform duration-400 mr-1"></span>
        <span className="transition-transform duration-500 mr-1">T</span>
        <span className="transition-transform duration-700 mr-1">O</span>
        <span className="transition-transform duration-700 mr-1"></span>
        <span className="transition-transform duration-1000 mr-1">C</span>
        <span className="transition-transform duration-1000 mr-1">A</span>
        <span className="transition-transform duration-1000 mr-1">R</span>
        <span className="transition-transform duration-1000">T</span>
      </span>
      <span className="span-mother2 flex absolute">
        <span className="transition-transform duration-200 mr-1">A</span>
        <span className="transition-transform duration-300 mr-1">D</span>
        <span className="transition-transform duration-400 mr-1">D</span>
        <span className="transition-transform duration-400 mr-1"></span>
        <span className="transition-transform duration-500 mr-1">T</span>
        <span className="transition-transform duration-700 mr-1">O</span>
        <span className="transition-transform duration-700 mr-1"></span>
        <span className="transition-transform duration-1000 mr-1">C</span>
        <span className="transition-transform duration-1000 mr-1">A</span>
        <span className="transition-transform duration-1000 mr-1">R</span>
        <span className="transition-transform duration-1000">T</span>
      </span>
    </button>
  );
};

export default Button;
