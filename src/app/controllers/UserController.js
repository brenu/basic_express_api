import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Não declaro explicitamente um objeto, pois
    // O req.body já vem nesse formato, e o model
    // ignora campos extras :D
    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async index(req, res) {
    return res.json({ message: 'Nothing here yet' });
  }

  async update(req, res) {
    return res.json({ message: 'Nothing here yet' });
  }

  async delete(req, res) {
    return res.json({ message: 'Nothing here yet' });
  }
}

export default new UserController();

/*
 *   Por padrão, todo controller segue esse esquema
 *   de class blahController e
 *   export default new blahController();
 */
