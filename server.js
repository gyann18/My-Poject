// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const employees = [
  {'name': 'John Doe', 'id': 'E001', 'address': '123 Main St', 'contact': '123-456-7890', 'salary': '50000'},
  {'name': 'Jane Smith', 'id': 'E002', 'address': '456 Elm St', 'contact': '987-654-3210', 'salary': '55000'},
  {'name': 'Michael Johnson', 'id': 'E003', 'address': '789 Oak St', 'contact': '456-789-0123', 'salary': '60000'},
  {'name': 'Emily Brown', 'id': 'E004', 'address': '101 Pine St', 'contact': '321-654-0987', 'salary': '52000'},
  {'name': 'David Wilson', 'id': 'E005', 'address': '202 Cedar St', 'contact': '789-012-3456', 'salary': '58000'},
  {'name': 'Sarah Lee', 'id': 'E006', 'address': '303 Maple St', 'contact': '012-345-6789', 'salary': '54000'},
  {'name': 'Amrita Verma', 'id': '2365', 'address': 'Bihar', 'contact': '96562444', 'salary': '23655'},
  {'name': 'Sanjay', 'id': '23655', 'address': 'Bangalore', 'contact': '9653244', 'salary': '900000'},
  {'name': 'Vinayaka', 'id': '1235', 'address': 'Pune', 'contact': '965485', 'salary': '60000'},
  {'name': 'Arav', 'id': '2329', 'address': 'Goa', 'contact': '965845', 'salary': '95000'}
];

app.use(express.json());

app.post('/login', (req, res) => {
  const { userId, password } = req.body;
  if (userId === 'Admin' && password === '2329') {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

app.get('/employees', (req, res) => {
  res.status(200).send(employees);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
