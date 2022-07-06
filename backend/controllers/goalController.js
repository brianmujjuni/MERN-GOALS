const asyncHandler = require('express-async-handler')
//@desc Get goals
//@route Get /api/goals
//@access Private
const getGoals = asyncHandler( async (req,res)=>{
    res.status(200).json({message: 'Get goals'})
})

//@desc Set goals
//@route Post /api/goals
//@access Private
const setGoal = asyncHandler( async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Create goals'})
})

const updateGoal = asyncHandler( async (req,res)=>{
    res.status(200).json({message: 'Update goals'})
})

const deleteGoal = asyncHandler( async (req,res)=>{
    res.status(200).json({message: 'Delete goals'})
})


module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}