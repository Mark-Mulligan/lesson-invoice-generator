import React from 'react';
import TextField from "@material-ui/core/TextField";

const CreateInvoiceForm = () => {
  return (
    <form>
      <TextField id="yourNameInput" label="Your Name" />
      <TextField id="studentNameInput" label="Student Name" />
    </form>
  )
}

export default CreateInvoiceForm;
