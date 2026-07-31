import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/login',(req,res)=>{
  res.send('Hello I am login endpoint')
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});