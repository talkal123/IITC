import User from '../models/userModel.js'

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})

        if (users.length === 0) {
            res.status(404).send({
                message: "Add Some user -  ימצחיק"
            })
        }
        res.send(users)
    } catch (error) {
        res.status(500).send("Unknown Server Error")
    }
}

export const addNewUser = async (req, res) => {
    try {
        const { name, password } = req.body

        const newUser = await new User({
            name,
            password
        }).save()
    
        res.status(201).json({
            message: "New joke added",
            user: newUser
        })

    } catch (error) {
        res.status(500).send("Unknown Server Error")
    }
}

export const getRandomUser = async (req, res) => {
    const getRandomUser = await User.aggregate([
        {
            $sample: {
                size: 1
            }
        }
    ])

    res.status(200).send(getRandomUser[0])
}

export const getUserByID = async (req, res) => {
    try {
        const { id } = req.params
        const foundUser = await User.findById(id)
        
        if (!foundUser) {
            res.status(404).send({
                message: `NO User found with id: ${id}`
            })
        }

        res.send(foundUser)
    } catch (error) {
        res.status(500)
    }
}

export const partialUserUpdate = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, password } = req.body;
  
      const fieldsToUpdate = {};
  
      if (name || password !== "") {
        fieldsToUpdate.name = name;
      }
  
      if (password || password !== "") {
        fieldsToUpdate.password = password;
      }
  
      const updatedUser = await user.findByIdAndUpdate(id, fieldsToUpdate, {
        new: true,
      });
  
      if (!updatedUser) {
        res.status(404).send({
          message: `NO User found with id: ${id}`,
        });
      }
  
      res.status(201).send(updatedUser);
    } catch (error) {
      // console.log(error);
      res.status(500);
    }
}

export const fullUserUpdate = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
  
      res.status(201).send(updatedUser);
    } catch (error) {
      res.status(500);
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      await User.findByIdAndDelete(id);
      res.status(200).send({
        message: "User Succefully Delete",
      });
    } catch (error) {}
  }

export default {
    getAllUsers,
    addNewUser,
    getRandomUser,
    getUserByID,
    partialUserUpdate,
    fullUserUpdate,
    deleteUser
}