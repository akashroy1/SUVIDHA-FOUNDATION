const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const cors = require('cors');
const corsOptions = {
  origin: ['http://192.168.51.1:3000', 'http://localhost:3000', process.env.FRONTEND_URI],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5434,
});

app.get('/', (req, res)=>{
  res.status(200).send('API is working');
});

// Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  if (!email || !password)
    res.status(400).json({ message: 'Email and Password required' });

  try {
    const result = await pool.query(
      'SELECT * FROM interns WHERE email = $1 AND password = $2',
      [email, password]
    );

    const user = result.rows[0];

    if (user) {
      const token = jwt.sign({ email }, 'secret_key', { expiresIn: '1h' });
      res.json(
        { 
          status: 'Success',
          token,
          user
        }
      );
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API endpoint to handle form submissions
app.post('/api/new-intern', async (req, res) => {
  const { iid, email,  name, phone, dob } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query('INSERT INTO interns (iid, email, name, phone, dob) VALUES ($1, $2, $3, $4, $5) RETURNING *', [iid, email, name, phone, dob]);
    const insertedIntern = result.rows[0];
    
    res.status(201).json(insertedIntern);
    
    client.release();
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
