const volunteer = require("./classes/volunteer")
const opportunity = require("./classes/opportunity")
const database = require("./db/database")
const user = require("./classes/user");
const drink = require("./classes/drink");
const { pool } = require("./db/database");

const mainController = (router, views) => {
    //define routes
    var index = require(views + 'index')
    var manageWhat = require(views + 'manageWhat')
    var orders = require(views + 'orders')
    var addVolunteer = require(views + 'addVolunteer')
    var menu = require(views + 'menu')
    var addOpportunity = require(views + 'addOpportunity')
    var editVolunteer = require(views + 'editVolunteer')
    var editOpportunity = require(views + 'editOpportunity')


    //controllers
    router.get('/',(request,response) => {
        let sess = request.session
        if(sess.user) {
            return response.redirect('/admin')
        }
        response.marko(index)
    })

    router.post('/login',(request,response) => {
        request.session.user = new user.User(request.body.email, request.body.pass)
        response.end('done') 
    })

    router.get('/admin',(request,response) => {
        if(request.session.user) {
            var greeting = "Hello " + request.session.user.email
            response.marko(manageWhat, { greeting: greeting })
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
    })


    router.post('/menu',(request,response) => {
        request.session.drink = new drink.Drink(request.body.drink)
        response.end('done') 
    })

    router.get('/orders',(request,response)  => {



        // if(request.session.user) {
        //     var greeting = "Hello " + request.session.user.email
        //     response.marko(orders, { greeting: greeting })
        // }
        if(request.session.drink) {
            var drink = "Please make a " + request.session.drink.drink
            response.marko(orders, { drink: drink })
        }
        else {
            // response.write('<h1>Please login first.</h1>')
            response.write('<h1>No orders so far...</h1>')
            // response.end('<a href='+'/'+'>Login</a>')
        }
        
    })

    router.get('/addVolunteer',(request,response) => {
        
        if(request.session.user) {
            async function runme() {
                const client = await database.pool.connect()
                var queryString = 'SELECT * FROM opportunity'
                console.log(queryString)
                const result = await client.query({
                    text: queryString,
                    rowMode: 'array',
                })
                client.release()
                var greeting = "Hello " + request.session.user.email
                response.marko(addVolunteer, { greeting: greeting , opportunities: JSON.stringify(result.rows)})
                
                
            }
            runme()
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
        
    })

    router.post('/addVolunteer',(request,response) => {
        volunteerObj = volunteer.requestToObject(request)
        async function runme() {
            await database.addVolunteer(volunteerObj)
        }
        runme()
        response.redirect('/orders')
    })

    

    router.get('/editVolunteer/:volunteerId',(request,response) => {
        if(request.session.user) {
            async function runme() {
                const client = await database.pool.connect()
                var queryString = 'SELECT * FROM volunteer WHERE id =' + parseInt(request.params.volunteerId)
                console.log(queryString)
                const result = await client.query({
                    text: queryString,
                    rowMode: 'array',
                })
                client.release()
                var greeting = "Hello " + request.session.user.email
                var volunteerObj = volunteer.arrayToObject(result.rows[0])
                response.marko(editVolunteer, { greeting: greeting , volunteer: volunteerObj, id: result.rows[0][0]})
            }
            runme()
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
        
    })

    router.get('/editOpportunity/:opportunityId',(request,response) => {
        if(request.session.user) {
            async function runme() {
                const client = await database.pool.connect()
                var queryString = 'SELECT * FROM opportunity WHERE id =' + parseInt(request.params.opportunityId)
                console.log(queryString)
                const result = await client.query({
                    text: queryString,
                    rowMode: 'array',
                })
                client.release()
                var greeting = "Hello " + request.session.user.email
                var opportunityObj = opportunity.arrayToObject(result.rows[0])
                response.marko(editOpportunity, { greeting: greeting , opportunity: opportunityObj, id: result.rows[0][0]})
            }
            runme()
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
        
    })

    router.post('/editVolunteer/:volunteerId',(request,response) => {
        volunteerObj = volunteer.requestToObject(request)
        async function runme() {
            await database.editVolunteer(volunteerObj, request.params.volunteerId)
        }
        runme()
        response.redirect('/orders')
    })

    
    router.post('/editOpportunity/:opportunityId',(request,response) => {
        opportunityObj = opportunity.requestToObject(request)
        async function runme() {
            await database.editOpportunity(opportunityObj, request.params.opportunityId)
        }
        runme()
        response.redirect('/menu')
    })

    router.post('/deleteVolunteer',(request,response) => {
        async function runme() {
            await database.deleteVolunteer(request.body.id)
        }
        runme()
        response.end('done') 
    })

    router.post('/deleteOpportunity',(request,response) => {
        async function runme() {
            await database.deleteOpportunity(request.body.id)
        }
        runme()
        response.end('done') 
    })

    router.get('/menu',(request,response) => {
        if(request.session.user) {
            async function runme() {
                const client = await database.pool.connect()
                var queryString = 'SELECT * FROM opportunity'
                console.log(queryString)
                const result = await client.query({
                    text: queryString,
                    rowMode: 'array',
                })
                client.release()
                var greeting = "Hello " + request.session.user.email
                response.marko(menu, { greeting: greeting , opportunities: JSON.stringify(result.rows)})
                
                
            }
            runme()
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
    })
    router.get('/addOpportunity',(request,response) => {
        if(request.session.user) {
            var greeting = "Hello " + request.session.user.email
            response.marko(addOpportunity, { greeting: greeting })
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
        
    })

    router.post('/addOpportunity',(request,response) => {
        opportunityObj = new opportunity.Opportunity(request.body.name, request.body.email, request.body.address, request.body.phonenumber)
        async function runme() {
            await database.addOpportunity(opportunityObj)
        }
        runme()
        response.redirect('/menu')
        // response.end('done') 
    })

    router.get('/logout',(request,response) => {
        request.session.destroy((err) => {
            if(err) {
                return console.log(err)
            }
            response.redirect('/')
        })

    })
    return router
}
exports.mainController = mainController