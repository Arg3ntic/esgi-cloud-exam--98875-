const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://esgi_cloud_exam_db_98875_user:hXd7urzxuTqW9i7a9qt816KM7BebPqzGo@dpg-ct03nva3esus7385rki0-a.frankfurt-postgres.render.com:5432/esgi_cloud_exam_db_98875', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;