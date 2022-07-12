import { useCalendarStore, useUiStore } from '../../hooks';

export const FabAddDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();
  const { isDateModalOpen } = useUiStore();

  const handleClickDelete = () => {
    startDeletingEvent();
  };

  if (!hasEventSelected || isDateModalOpen) return <></>;

  return (
    <button
      aria-label="btn-delete"
      onClick={handleClickDelete}
      className="btn btn-danger fab-danger"
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
