const user = require("./classes/user");
const drink = require("./classes/drink");
const { pool } = require("./db/database");

const mainController = (router, views) => {
    //define routes
    var index = require(views + 'index')
    var manageWhat = require(views + 'manageWhat')
    var orders = require(views + 'orders')
    var menu = require(views + 'menu')

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

        if(request.session.drink && request.session.drink.drink !== "") {
            var drink = "Please make a " + request.session.drink.drink
            response.marko(orders, { drink: drink })
        }
        else {
            response.write('<h1>No orders so far...</h1>')
            response.end('<a href='+'/'+'>Home Page</a>')
        }
        
    })

    router.get('/menu',(request,response) => {
        if(request.session.user) {
                     var greeting = "Hello " + request.session.user.email
                response.marko(menu, { greeting: greeting }) 
                
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