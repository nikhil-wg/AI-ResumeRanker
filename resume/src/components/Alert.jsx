import { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import styled from 'styled-components';
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
    // <div
    // className={`fixed bottom-4 right-4 z-50 flex items-center space-x-4 max-w-lg px-6 py-4 rounded-lg shadow-lg transition-opacity duration-500 text-lg ${
    //     type === "error"
    //         ? "bg-red-500 text-white"
    //         : "bg-green-500 text-white"
    // }`}
    
    // >
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     className="h-6 w-6 shrink-0"
    //     fill="none"
    //     viewBox="0 0 24 24"
    //     stroke="currentColor"
    //     strokeWidth={2}
    //   >
    //     {type === "error" ? (
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    //       />
    //     ) : (
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M5 13l4 4L19 7"
    //       />
    //     )}
    //   </svg>
    //   <span>{message}</span>
    // </div>
    <StyledWrapper>
      <div className="info">
        <div className="info__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 24 24" height={24} fill="none"><path fill="#393a37" d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z" /></svg>
        </div>
        <div className="info__title">lorem ipsum dolor sit amet</div>
        <div className="info__close"><svg height={20} viewBox="0 0 20 20" width={20} xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37" /></svg></div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .info {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 320px;
    padding: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    background: #509AF8;
    border-radius: 8px;
    box-shadow: 0px 0px 5px -3px #111;
  }

  .info__icon {
    width: 20px;
    height: 20px;
    transform: translateY(-2px);
    margin-right: 8px;
  }

  .info__icon path {
    fill: #fff;
  }

  .info__title {
    font-weight: 500;
    font-size: 14px;
    color: #fff;
  }

  .info__close {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: auto;
  }

  .info__close path {
    fill: #fff;
  }`;




Alert.propTypes = {
  type: PropTypes.oneOf(["error", "success"]).isRequired, // Validate type
  message: PropTypes.string.isRequired, // Validate message
  visible: PropTypes.bool.isRequired, // Validate visibility
  onClose: PropTypes.func.isRequired, // Validate onClose function
};

export default Alert;
