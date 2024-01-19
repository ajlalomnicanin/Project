import { Button, TextField } from "@mui/material";

const ContactUs = () => {
  const containerStyle = {
    maxWidth: "600px",
    margin: "50px auto",
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const textFieldStyle = {
    marginBottom: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#4caf50",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const handleButtonClick = () => {
    // Logic for sending the message
    console.log("Message sent!");
  };

  return (
    <div style={containerStyle}>
      <h2>Contact Us</h2>
      <form style={formStyle}>
        <TextField
          label="Full Name"
          variant="outlined"
          style={textFieldStyle}
          required
        />
        <TextField
          label="Email Address"
          variant="outlined"
          style={textFieldStyle}
          required
        />
        <TextField
          label="Message Subject"
          variant="outlined"
          style={textFieldStyle}
          required
        />
        <TextField
          label="Message Text"
          variant="outlined"
          multiline
          rows={4}
          style={textFieldStyle}
          required
        />
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={handleButtonClick}
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
