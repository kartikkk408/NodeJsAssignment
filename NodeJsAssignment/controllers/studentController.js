const Student = require('../models/student');

const sLoginPost = async (req, res) => {

        const sRoll = req.body.roll;
        const sIndividual = await Student.findOne({roll : sRoll});
        if(!sIndividual){
          res.render("student/login", {
            error : "Login with correct roll number"
          })
        }
        res.render("student/view", { one : sIndividual});
    };
const sLoginGet = (req, res) => {
       res.render("student/login");
    };

//exporting student controller functions
module.exports={
    sLoginPost,
    sLoginGet
}
