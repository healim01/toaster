const CameraFrame = ({ imgs }: { imgs: string[] }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      {imgs?.map((img) => (
        <img src={img} alt={`Captured-${img}`} width='300' height={100} />
      ))}
    </div>
  );
};

export default CameraFrame;
