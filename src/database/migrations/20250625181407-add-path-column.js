'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
       await queryInterface.addColumn('categories', 'path', { 
        type: Sequelize.INTEGER, 
      });
     
  },

  async down (queryInterface) {
      await queryInterface.dropTable('categories', 'path');
     
  }
};
