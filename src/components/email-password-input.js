import "./email-password-input.css";

const EmailPasswordInput = ({ emailCaBn }) => {
  return (
    <div className="email-password-input">
      <div className="rectangle-parent4">
        <div className="frame-child6" />
        <h1 className="email-ca-bn">{emailCaBn}</h1>
      </div>
    </div>
  );
};

export default EmailPasswordInput;
