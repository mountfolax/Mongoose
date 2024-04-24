const Student = require('../model/studentModel')

const getAllStudent = async (req ,res) => {
    try {
        
        const students = await Student.find()
        return res.status(200).json(students)

    } catch (error) {
        res.status(500).json(error)
    }
}

const createStudent = async (req , res) => {
   if (!req.body.name){
    return res.status(400).json({message: 'Please Enter Your Name'})
   }

   if (!req.body.email){
    return res.status(400).json({message: 'Please Enter Your Email'})
   }

   if (!req.body.password){
    return res.status(400).json({message: 'Please Enter Your Password'})
   }

   if (!req.body.phone){
    return res.status(400).json({message: 'Please Enter Your Phone'})
   }

   try{
    const newStudent = await Student.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
    })

    return res.status(201).json(newStudent)
   }catch (error) {
    return res.status (500).json(error)
   }
}

const getSingleStudent = async (req ,res) =>{
    try {
        const singleStudent = await Student.findById(req.params.id)
        res.status(200).json(singleStudent)
    } catch (error) {
        res.status(500).json(error)
    }
}


const updateStudent = async (req , res) =>{
    try {
        const UpdateStudent = await Student.findByIdAndUpdate(req.params.id, req.body,{new: true})
        if (updateStudent){
              return  res.status(200).json(UpdateStudent)
        }
    
    } catch (error) {
         res.status(500).json(error)
    }
}


const deleteStudent = async (req , res) => {
    try {
        const DeleteStudent = await Student.findByIdAndDelete(req.params.id)
        if (DeleteStudent){
              return  res.status(200).json({message: 'student deleted succesfully'})
        }
    
    } catch (error) {
         res.status(500).json(error)
    }
}
module.exports = {getAllStudent , createStudent , getSingleStudent , updateStudent , deleteStudent} 


