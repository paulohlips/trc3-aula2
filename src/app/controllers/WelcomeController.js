class WelcomeController {
  welcome(req, res) {
    return res.status(200).json({ ok: true });
  }

  store(req, res) {
    const { name } = req.body;
    console.log(req.body);

    if (!name) {
      return res.status(422).json({ message: "O name é obrigatório" });
    }

    return res.status(201).json({ message: "Usuário criado com sucesso!" });
  }
}

export default new WelcomeController();
