import Sequelize, { Model } from 'sequelize';

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
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
