export const GalleryContentSkeleton = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            key={`gallery-skeleton-${idx}`}
            className={`w-fit p-4 rounded-xl overflow-hidden shadow-md bg-gray-100 animate-pulse`}
          >
            <div className="w-[180px] h-[500px] bg-gray-300 rounded-lg" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30">
        <div className="text-amber-500 text-lg font-semibold animate-pulse">
          사진을 불러오는 중이에요 📸
        </div>
      </div>
    </div>
  );
};
