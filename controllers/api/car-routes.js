const axios = require('axios');
const cheerio = require('cheerio');
const cars = require('express').Router();



cars.get('/', (req, res) => {
    res.json('Muscle-hustle-Api')
})

//right now puts entire html onto page
cars.get('/links', (req, res) => {
    axios.get('https://www.motorauthority.com/news/muscle-cars')
    .then(response =>  response.data) .then(data => {
        res.type('html'

        )
        console.log(data)
        res.send(data)})
    }
    )


    module.exports = cars; 
    
    
    
    
    
    // const html = response.data
        // const $ = cheerio.load(html)
        // let articles = []
        
        
        //     $('a:contains("car":)', html).each(function () {
        //         const title = $(this).text()
        //         const url = $(this).attr('href')
        //         console.log($(this))
        //         articles.push({ 
        //             title,
        //             url
        //         })

        //     })
        //     res.json(articles)