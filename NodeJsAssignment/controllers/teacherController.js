const Student = require('../models/student');

const tLoginGet = (req, res) => {
    res.render("teacher/teacherLogin");
};
const tLoginPost = (req, res) => {

    //******** Teacher Login Password **********//
    if(req.body.password == "pswd"){
        res.redirect("/teacher/option");
    }
    else{
        res.render("teacher/teacherLogin", {
            error : "Please Enter Correct Password"
        })
    }
};
const tDeleteGet =async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.redirect("/teacher/viewall")
};
const tOptionGet = (req,res) => {
    res.render("teacher/option")
};
const tEditGet =async (req, res) => {
    const user = await Student.findById(req.params.id)
    res.render("teacher/edit", {user : user})
};
const tEditPost =async (req, res) => {
    const user = await Student.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/teacher/viewall")
};
const tAddGet = (req, res) => {
    res.render("teacher/addstudent");
};
const tAddPost = async (req, res) => {
    const singleStudent = new Student({
        name : req.body.name,
        roll : req.body.roll,
        dob : req.body.dob,
        score : req.body.score
    })
    try {
        const newStudent = await singleStudent.save();
        res.redirect("/teacher/add");
      } catch {
        res.send("error")
    }
};
const tViewGet = async (req, res) => {
    const allStudents = await Student.find()
    res.render("teacher/viewall", {student : allStudents})
};

//exporting teacher controller functions
module.exports={
    tLoginGet,
    tLoginPost,
    tDeleteGet,
    tOptionGet,
    tEditGet,
    tEditPost,
    tAddGet,
    tAddPost,
    tViewGet
}
