var dbCon = require('../../config/db_config');

exports.addpatientdetails = function (req,res){
    try{
        var input = JSON.parse(JSON.stringify(req.body));

        var reqObj = {
            PatientId : input.PatientID,
            Date : input.Date,
            Cholestorol : input.Cholestorol,
            SocialDisease : input.SocialDisease,
            Allergy : input.Allergy,
            BloodPressure : input.BloodPressure,
            BloodSugar : input.BloodSugar,
        }

        dbCon.query('INSERT INTO PatientBasicHealthInfo set ?', reqObj, function(err, result){

            if(err)
              throw err;
            res.send("Sucessfull")  
        })
        
        }

        catch (e){

        }

    }