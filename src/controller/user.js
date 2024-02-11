


const user =[{
    id:1,
    name:"ajithkumar",
    mail:"ajithbhc24@gmail.com",
    ph:6381155326,
    userName:"AK1234",
    password:123,
    status:true
}]


const getAllUsers =(req,res)=>{
    try {
        res.status(200).send({
            message:"user data fetched successfully",
            user
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal server error"
        })
    }
}
const findIndex = (array,id)=>{
    // console.log(array,id)
    for(let i=0; i<array.length;i++){
        if(array[i].id==id)
        return i
    }
    return -1
}
const getUserById =(req,res)=>{
    try {
       
        let {id}=req.params
        const index = findIndex(user,id)
        if(index !== -1){
            res.status(200).send({
                message:"user data fetched successfully",
                user:user[index]
            })
        }
        else{
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
       
    } catch (error) {
        res.status(500).send({
            message:"Internal server error"
        })
    }
}

const AddUser =(req,res)=>{
    try {
       let id = user.length?user[user.length-1].id + 1 : 1
       let data = req.body
        data.id=id
        
        user.push(data)

        res.status(201).send({
            message:"user Created Successfully"
        })
       
    } catch (error) {
        res.status(500).send({
            message:"Internal server error"
        })
    }
}
const EditUserById =(req,res)=>{
    try {
       
        let {id}=req.params
        const index = findIndex(user,id)
        if(index !== -1){
            req.body.id = Number(id)
            user.splice(index,1,req.body)
            res.status(200).send({
                message:"user data edited successfully",
                user:user[index]
            })
        }
        else{
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
       
    } catch (error) {
        res.status(500).send({
            message:"Internal server error"
        })
    }
}
const DeleteUserById =(req,res)=>{
    try {
       
        let {id}=req.params
        const index = findIndex(user,id)
        if(index !== -1){
            user.splice(index,1)
            res.status(200).send({
                message:"user data Deleted successfully",
                user:user[index]
            })
        }
        else{
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
       
    } catch (error) {
        res.status(500).send({
            message:"Internal server error"
        })
    }
}

export default{
    getAllUsers,
    getUserById,
    AddUser,
    EditUserById,
    DeleteUserById
}
