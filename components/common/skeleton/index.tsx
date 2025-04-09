const Skeleton = ({ ...props }) => {
  const classNames = `bg-gray-300 rounded-lg ${props?.className}`;
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className={classNames}></div>
    </div>
  );
};

export default Skeleton;
