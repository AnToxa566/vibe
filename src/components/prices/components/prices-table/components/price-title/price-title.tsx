interface Props {
  title: string;
  className?: string;
}

const PriceTitle: React.FC<Props> = ({ title, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`flex items-center gap-1.5 absolute top-0 left-0 origin-top-left rotate-90`}
      >
        <span className="text-3xl font-black uppercase whitespace-nowrap">
          {title}
        </span>

        <div className="bg-white h-5 w-screen" />
      </div>
    </div>
  );
};

export { PriceTitle };
