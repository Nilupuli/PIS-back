var db = require('../../config/db_config');

exports.createDB = function (req, res) {

    var sql = "CREATE TABLE if not exists user_accounts (email VARCHAR(255) PRIMARY KEY, first_name VARCHAR(255), second_name VARCHAR(255) , phone INT(10) , password VARCHAR(32) )";
    db.query(sql, function (err, result) {
        if (err) throw err;
       // res.send('Table Created');
    });

    var sql1 = "CREATE TABLE if not exists Doctor (email VARCHAR(255) PRIMARY KEY, first_name VARCHAR(255), second_name VARCHAR(255) , phone INT(10) , password VARCHAR(32) )";
    db.query(sql1, function (err, result) {
        
        if (err) throw err;
        //res.send('Table Created');
    });

    var sql2 = "CREATE TABLE if not exists User (NIC VARCHAR(15) PRIMARY KEY, UserType VARCHAR(255), FirstName VARCHAR(255), LastName VARCHAR(255), ContactNo INT(10),  Email VARCHAR(255) , Password VARCHAR(32), AddNo VARCHAR(255) ,AddStreet VARCHAR(255) , AddCity VARCHAR(255))";
    db.query(sql2, function (err, result) {
        console.log(err);
        if (err) throw err;
       // res.send('Table Created');
    });

    var sql3 = "CREATE TABLE if not exists Role (RoleID VARCHAR(15) PRIMARY KEY,PermissionID VARCHAR(50),RoleName VARCHAR(255),NIC VARCHAR(15),FOREIGN KEY(NIC) REFERENCES User(NIC))";
    db.query(sql3, function (err, result) {
        console.log(err);
        if (err) throw err;
       // res.send('Table Created');
    });

    var sql4 = "CREATE TABLE if not exists Privilege (PermisionID VARCHAR(15) PRIMARY KEY,PermissionName VARCHAR(50),PermissionDescription VARCHAR(255),RoleID VARCHAR(15), FOREIGN KEY(RoleID) REFERENCES Role(RoleID))";
    db.query(sql4, function (err, result) {
        if (err) throw err;
        //res.send('Table Created');
    });

    // // var sql5 = "CREATE TABLE if not exists Chat (ChatID VARCHAR(15) PRIMARY KEY,DateTime VARCHAR(50),Message VARCHAR(255))"
    // // db.query(sql5, function (err, result) {
    // //     if (err) throw err;
    // //     res.send('Table Created');
    // // });

    // var sql6 = "CREATE TABLE if not exists Patient (PatientID int PRIMARY KEY,NIC VARCHAR(15),Occupation VARCHAR(255), DOB VARCHAR(255), BloodType VARCHAR(255), MaterialState VARCHAR(255), Height VARCHAR(255), Weight VARCHAR(255))"
    // db.query(sql6, function (err, result) {
    //     if (err) throw err;
    //     res.send('Table Created');
    // });

    var sql7 = "CREATE TABLE if not exists Patient (PatientID VARCHAR(15) PRIMARY KEY,NIC VARCHAR(15),Occupation VARCHAR(255), DOB VARCHAR(255), BloodType VARCHAR(255), MaterialState VARCHAR(255), Height VARCHAR(255), Weight VARCHAR(255), FOREIGN KEY(NIC) REFERENCES User(NIC))";
    db.query(sql7, function (err, result) {
        console.log(err);
        if (err) throw err;

        //res.send('Table Created');
    });

    var sql8 = "CREATE TABLE if not exists Doctor (DoctorRegNO VARCHAR(15) PRIMARY KEY,DoctorFileID VARCHAR(15),DoctorDestination VARCHAR(255),NIC VARCHAR(255), WorkAddress VARCHAR(255),FOREIGN KEY(NIC)  REFERENCES User(NIC))"
    db.query(sql8, function (err, result) {
        if (err) throw err;
        //res.send('Table Created');
    });

    var sql9 = "CREATE TABLE if not exists PatientBasicHealthInfo(Date VARCHAR(15),Cholestorol VARCHAR(255), SocialDisease VARCHAR(255), Allergy VARCHAR(255), BloodPressure VARCHAR(255), BloodSugar VARCHAR(255),PatientID VARCHAR(15),FOREIGN KEY(PatientID)  REFERENCES Patient(PatientID))"
    db.query(sql9, function (err, result) {
        if (err) throw err;
        console.log(err);
        //res.send('Table Created');
    });

   
    
}