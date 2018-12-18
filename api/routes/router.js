
'use strict'
module.exports = function (app) {

    var user_account_controller = require('../controllers/user_account_controller');
    var db_controller = require('../controllers/dbController');
    var doctor_account_controller = require('../controllers/doctor_account_controller');

    // app.route('/', function (req, res) {
    //     res.sendFile(__dirname + '/' + 'index.html')
    // });
    app.route('/create-my-database')
        .get(db_controller.createDB)

    app.route('/signin')
        .post(user_account_controller.login)

    app.route('/signup')
        .post(user_account_controller.createUserAccount)

    /*app.get('/patientdetails',function (req,res){
            //console.log(req.body);
            
            
            database.getPatientDetails;
            res.json({sucess:true , msg:'hello form json'});
        });*/

    app.route('/addpatientinfo')
        .post(doctor_account_controller.addpatientdetails);    

    app.route('/patientdetails')
    .post(user_account_controller.getPatientDetails)    

}