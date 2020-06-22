import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

/******************************************************
 *  No modelo, colocamos apenas as informações ideais *
 *  do usuário, isto é, não colocamos informação do   *
 *  banco de dados: id, created_at, updated_at        *
 ******************************************************/
class User extends Model {
  static init(sequelize) {
    /***************************************************
     * Parâmetros da super.init() :                    *
     *   1 -> Um objeto contendo todas as variáveis    *
     *        da classe                                *
     *   2 -> Um objeto com configurações para a tabela*
     **************************************************/
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
