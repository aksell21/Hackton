const AddBooking = ({ children, ...props }) => {
  return (
    <div className={styles.buttonDiv}>
      <button {...props} className={styles.button}>
        {children}
      </button>
    </div>
  );
};

export default AddBooking;
