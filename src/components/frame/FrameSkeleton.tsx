const FrameSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-2 w-[150px] h-[330px] rounded-2xl border border-gray-200 bg-gray-100 animate-pulse">
      <div className="w-[100px] h-[270px] bg-gray-300 rounded-md" />
      <div className="w-[80px] h-[16px] bg-gray-300 rounded" />
    </div>
  );
};

export default FrameSkeleton;
