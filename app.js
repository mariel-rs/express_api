const express = require("express")

// Express app
const app = express()

app.use(express.json()) //it will use JSON

const port = 3000

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

// HTTP methods

// Return a list of explorers
app.get('/v1/explorers', (req, res) => {
    console.log(`API explorers GET all requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Mariel"}
    const explorer2 = {id:2, name: "Carlo"}
    const explorer3 = {id: 3, name: "Olrac"}
    const explorers = [explorer1, explorer2, explorer3]
    res.status(200).json(explorers);
})

// Return the explorer using an ID
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API explorers GET request ${new Date()}`)
    console.log(`Getting explorer name with id ${req.params.id}`)
    const explorer = {id: 1, name: "Mariel"}
    res.status(200).json(explorer)
})

// Create an explorer
app.post('/v1/explorers', (req, res) => {
    console.log(`API explorer POST request ${new Date()}`)
    const requestBody = req.body // Client parameters
    res.status(201).json({message: "Created"})
})

// Update an explorer
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`API explorer PUT request ${new Date()}`)
    console.log(`Update explorer with ID ${req.params.id}`)
    const requestBody = req.body 
    res.status(200).json({message: "Updated"})
})

// Delete a explorer
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`API explorer DELETE request ${new Date()}`)
    console.log(`Delete explorer with ID ${req.params.id}`)
    const requestBody = req.body 
    res.status(200).json({message: "Deleted"})    
})