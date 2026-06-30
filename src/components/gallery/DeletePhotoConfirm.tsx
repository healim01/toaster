import { Button } from '@/components';

interface Props {
  onCancel: () => void;
  onConfirm: () => void;
}

export const DeletePhotoConfirm = ({ onCancel, onConfirm }: Props) => {
  return (
    <div className="flex flex-col gap-6 min-w-[320px]">
      <h2 className="text-lg font-bold text-center">정말 삭제하시겠습니까?</h2>

      <p className="text-sm text-gray-500 text-center">
        삭제한 사진은 복구할 수 없습니다.
      </p>

      <div className="flex justify-center gap-3">
        <div className="w-28">
          <Button
            label="취소"
            variant="outlined"
            size="full"
            onClick={onCancel}
          />
        </div>

        <div className="w-28">
          <Button label="삭제" size="full" onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
};
