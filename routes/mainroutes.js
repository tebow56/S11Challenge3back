const express = require('express')
const axios = require('axios')
const router = express.Router()


router.get('/', (req,res)=>{
    res.send(`<button> <a href="/users">Users</a></button>
        <button> <a href="/books">Books</a></button>`)
})

router. get ('/users', async(req,res) =>{
    const url =`https://api-books-ac3j.onrender.com/users` 
    try {const response = await axios.get(url)
    const data = response.data
    res.json(data)
    }
    catch {
        res.status(404).json ({error: 'pagína no encontrada'})
    }
})


router.get ('/books', async (req,res)=>{
    const url = `https://api-books-ac3j.onrender.com/books`
    try {
        const response = await axios.get(url)
        const data = response.data
        res.json(data)
    }
    catch{
        res.status(404).json ({error: 'pagína no encontrada'})
    }
})




module.exports = router