const Card = ({ className, align, children }) => {
  const classes = "card card-bordered bg-base-100 " + className;
  const body_classes = "card-body p-6 " + align;

  return (
    <div className={classes}>
      <div className={body_classes}>{children}</div>
    </div>
  );
};

export default Card;
