const { SequelizeAuto } = require('sequelize-auto');

const auto = new SequelizeAuto('companx', 'root', '54384264', {
  host: 'localhost',
  dialect: 'mysql',
  directory: './models', // Output directory for generated models
  caseFile: 'l', // Case file naming (see documentation for other options)
  additional: {
    timestamps: false // Set to true tables i created have createdAt and updatedAt columns
  }
});

auto.run((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Models generated successfully!');
  }
});