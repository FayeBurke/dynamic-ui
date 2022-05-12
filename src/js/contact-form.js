export default {
  fields: {
    legend: 'User Details',
    fields: [
      {
        type: 'input',
        inputType: 'text',
        label: 'Name',
        model: 'name',
        placeholder: 'Your name',
        required: true
      },
      {
        type: 'input',
        inputType: 'email',
        label: 'E-mail',
        model: 'email',
        placeholder: 'User\'s e-mail address',
        required: true,
      },
      {
        type: 'textArea',
        label: 'Enquiry',
        model: 'enquiry',
        placeholder: 'What are you looking for?',
        required: true,
      },
    ],
  },
  options: {
    validateAfterChanged: true,
    validateAsync: true
  },
  model: {
    name: '',
    email: '',
    enquiry: ''
  }
}