'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contactos', {
      id_contacto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_contacto: {
        type: Sequelize.STRING
      },
      fecha_ac: {
        type: Sequelize.DATE
      },
      telefono: {
        type: Sequelize.STRING
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuario_normals',
          key: 'id_usuario',
          onDelete: 'cascade',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contactos');
  }
};