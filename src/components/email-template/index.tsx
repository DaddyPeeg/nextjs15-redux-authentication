import * as React from "react";

interface EmailTemplateProps {
  to_name: string;
  subject: string;
  text: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  to_name,
  subject,
  text,
}) => (
  <div>
    <h1>Welcome, {to_name}!</h1>
    <h3>{subject}</h3>
    <p>{text}</p>
  </div>
);

export default EmailTemplate;
