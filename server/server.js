import express from 'express'
import cors from "cors"
import dotenv from 'dotenv'
import connectDB from "./DB/index.js"
const app = express();
import User from "./models/users.models.js"

dotenv.config();

app.use(express.json());

connectDB()
app.use(cors())


const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`Your server is running on port ${port}`);
    console.log(`Ctrl+ right click on  : http://localhost:${port}`)
})

app.post('/api/users', async (req, res) => {

    const { firstName, lastName, email } = req.body;
    
    try {
        const newUser = await User.create({
            firstName, lastName, email 
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


app.get("/api/data", (req, res) => {
    User.find()
        .then(a => res.json(a))
        .catch(err => res.json(err))
})

app.get("/api/update/:id", async (req,res)=>{
    const id = req.params.id;
   try{
    const user = await User.findById(id);
    if(user){
        res.json(user);
    }else{
        res.status(404).json({message: "user not found"});
    }
    }catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
})

app.put("/api/update/:id", async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
  
  
    try {
        const user = await User.findByIdAndUpdate(id, updatedData, { new: true });
        if (user) {
            res.json(user);
            console.log('Success');
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
  });
  

app.delete('/api/data/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const user = await User.findByIdAndDelete(id);
  
      if (!user) {
        return res.status(404).send({ error: `User with id ${id} not found.` });
      }
  
      console.log(`Item with id: ${id} deleted successfully`);
      res.status(200).send({ message: `User with id ${id} deleted successfully.` });
    } catch (error) {
      console.error(`Error deleting data with id ${id}:`, error);
      res.status(500).send({ error: 'Server Error' });
    }
  });








//   app.get("/api/update/:id", async (req, res) => {
//     const id = req.params.id; // Extract the id from req.params
//     try {
//         const user = await User.findById(id);
//         if (user) {
//             res.json(user);
//         } else {
//             res.status(404).json({ message: 'User not found' });
//         }
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
//   });
  