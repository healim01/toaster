interface Props {
  marqueeItem: string[];
  height?: number;
}

const Marquee = ({ marqueeItem, height = 50 }: Props) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-marquee min-w-fit">
        {[...marqueeItem, ...marqueeItem, ...marqueeItem].map((item, idx) => (
          <img
            key={idx}
            src={item}
            style={{ height }}
            className="mx-4 shrink-0"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
