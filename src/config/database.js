module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber-gostack10',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
