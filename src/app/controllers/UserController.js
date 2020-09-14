import User from "../models/User";

// CRUD - Create | Read | Update | Delete

class UserController {
  async index(req, res) {
    try {
      const users = await User.find();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` });
    }
  }

  async store(req, res) {
    const { name, email, cpf } = req.body;

    if (!(name && email)) {
      return res
        .status(422)
        .json({ message: "Nome e email são obrigatórios!" });
    }

    try {
      const user = await User.create(req.body);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` });
    }
  }
}

export default new UserController();
