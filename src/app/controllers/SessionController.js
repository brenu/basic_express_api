import jwt from 'jsonwebtoken';

import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, '87ae25c8b87c3d956cc7993d90f00c67', {
        expiresIn: '7d',
      }),
    });
  }

  async index(req, res) {}

  async show(req, res) {}

  async update(req, res) {}

  async delete(req, res) {}
}

export default new SessionController();
