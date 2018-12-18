var dbCon = require('../../config/db_config');

exports.createUserAccount = function (req, res) {
    try {
        var input = JSON.parse(JSON.stringify(req.body));

        var reqObj = {
            Email: input.email,
            Full_Name: input.fullName,
            Known_Name: input.knownName,
            Phone_No: input.phoneNo,
            Password: input.password,
        }
        dbCon.query('SELECT * FROM doctordetails WHERE Email = ?',reqObj.Email, function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            if(rows.length == 0){
            dbCon.query("INSERT INTO doctordetails set ? ", reqObj, function (err, result) {
                if (err)
                    throw err;

                res.send("Successfully Created.");
            });
            }else{
                res.send('');
            }
            
        });


    } catch (e) {

    }
}

exports.login = function (req, res) {
    try {
        var input = JSON.parse(JSON.stringify(req.body));
        console.log(input);
        var reqObj = {
            email: input.email,
            password: input.password,
        }
        dbCon.query('SELECT * FROM doctordetails WHERE email = ? AND password = ?',[reqObj.email,reqObj.password], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            if(rows.length == 0){
                res.send(JSON.stringify(''));

            }else{
                res.send(JSON.stringify('Login Success.'));
            }
            
        });


    } catch (e) {

    }
}


//patient details
   exports.getPatientDetails = function (req, res){
    var input = JSON.parse(JSON.stringify(req.body));
    
    var reqObj = {
        Reg_No: input.searchpatient,

    }
    console.log(reqObj);
    dbCon.query('SELECT * FROM patientdetails WHERE Reg_No = ?',reqObj.Reg_No,function(err,data){
      if(err) throw err;
      var data_from_query = data; 
      console.log(JSON.stringify(data_from_query));
       res.send(JSON.stringify(data_from_query));
    });

  }