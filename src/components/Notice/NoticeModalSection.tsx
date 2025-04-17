import { Modal } from '@/components';
import { useGetNoticeQuery } from '@/hooks/queries';
import { useState } from 'react';

const NoticeModalSection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { notice } = useGetNoticeQuery();

  return (
    notice && (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="w-[300px] md:w-[400px] gap-5 flex flex-col items-center">
          <div className="w-full h-[300px] md:h-[400px]">
            <img src={notice.url} className="w-full h-full" />
          </div>
          <h2 className="text-3xl font-bold">{notice?.title}</h2>
          <p className="text-lg  mt-2 text-gray-600">{notice?.description}</p>
        </div>
      </Modal>
    )
  );
};

export default NoticeModalSection;
