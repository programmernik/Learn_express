import User from "../models/user.js";
export const registered = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ massage: "name , email and password are requred" });
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    if (!user) {
      return res.status(404).json({ massage: "Page is not found" });
    }
    return res.status(201).json({ massage: "sucessfully", user });
  } catch (err) {
    res.status(500).json({ massage: "Enternal Server Error", err });
  }
};

export const getuser = async (req, res) => {
  try {
    const user = await User.find();

    return res.status(200).json({ massage: "Sucessfull", user });
  } catch (error) {
    res.status(500).json({ massage: "Internal server error", error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, password } = req.body;
    if (!id) {
      return res.status(400).json({ massage: "Id is requred" });
    }
    const user = await User.findByIdAndUpdate(
      id,
      { name: name, email: email, password: password },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ massage: "User not Updated" });
    }

    return res.status(200).json({ massage: "Update Sucessfully", user });
  } catch (error) {
    res.status(500).json({ massage: "Internal server error", error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    return res.status(200).json({ massage: "Id Is Deleted", user });
  } catch (error) {
    res.status(500).json({ massage: "Somthing error", error });
  }
};

export const findoneUser = async (req, res) => {
  try {
    const { id } = req.params;
    // const {name}=req.body
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ massage: "User not Found" });
    }
    //    if(name) user.name=name
    //     user.save()
    return res.status(200).json({ massage: "sucessfully", user });
  } catch (error) {
    res.status(500).json({ massage: "Internal Server Error", error });
  }
};

export const findemail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({email}).select('name')
    if (!user) {
      return res.status(404).json({ massage: "User not found" });
    }
    return res.status(200).json({ massage: "sucessfully", user });
  } catch (error) {
    return res.status(500).json({ massage: "Internal Error", error });
  }
};
