const volunteer = require("./classes/volunteer")
const database = require("./db/database")
const user = require("./classes/user");
const { pool } = require("./db/database");

const mainController = (router, views) => {
    //define routes
    var index = require(views + 'index')
    var manageWhat = require(views + 'manageWhat')
    var manageVolunteers = require(views + 'manageVolunteers')
    var addVolunteer = require(views + 'addVolunteer')
    var manageOpportunities = require(views + 'manageOpportunities')
    var addOpportunity = require(views + 'addOpportunity')


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

    router.get('/manageVolunteers',(request,response)  => {
        if(request.session.user) {
            async function runme() {
                const client = await database.pool.connect()
                var queryString = 'SELECT * FROM volunteer'
                console.log(queryString)
                const result = await client.query({
                    text: queryString,
                    rowMode: 'array',
                })
                client.release()
                var greeting = "Hello " + request.session.user.email
                response.marko(manageVolunteers, { greeting: greeting , volunteers: JSON.stringify(result.rows)})
            }
            runme()
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
        
    })

    router.get('/addVolunteer',(request,response) => {
        if(request.session.user) {
            var greeting = "Hello " + request.session.user.email
            response.marko(addVolunteer, { greeting: greeting })
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
        
    })

    router.post('/addVolunteer',(request,response) => {
        volunteerObj = new volunteer.Volunteer(request.body.firstname, request.body.lastname, request.body.username, request.body.password, request.body.centers, request.body.skills, request.body.availability, request.body.address, request.body.phone, request.body.email, request.body.education, request.body.licenses, request.body.emergencyname,request.body.emergencyphone, request.body.emergencyemail, request.body.emergencyaddress, request.body.dlfile, request.body.ssfile, request.body.approval)
        async function runme() {
            await database.addVolunteer(volunteerObj)
        }
        runme()
        response.redirect('/manageVolunteers')
        // response.end('done') 
    })

    router.post('/deleteVolunteer',(request,response) => {
        async function runme() {
            await database.deleteVolunteer(request.body.id)
        }
        runme()
        response.end('done') 
    })

    router.get('/manageOpportunities',(request,response) => {
        if(request.session.user) {
            var greeting = "Hello " + request.session.user.email
            response.marko(manageOpportunities, { greeting: greeting })
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
