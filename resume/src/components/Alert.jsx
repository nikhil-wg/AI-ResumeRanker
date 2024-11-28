import { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const Alert = ({ type, message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto-hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
    className={`fixed bottom-4 right-4 z-50 flex items-center space-x-4 max-w-lg px-6 py-4 rounded-lg shadow-lg transition-opacity duration-500 text-lg ${
        type === "error"
            ? "bg-red-500 text-white"
            : "bg-green-500 text-white"
    }`}
    
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        {type === "error" ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        )}
      </svg>
      <span>{message}</span>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(["error", "success"]).isRequired, // Validate type
  message: PropTypes.string.isRequired, // Validate message
  visible: PropTypes.bool.isRequired, // Validate visibility
  onClose: PropTypes.func.isRequired, // Validate onClose function
};

export default Alert;
