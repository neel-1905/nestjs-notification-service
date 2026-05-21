export default () => ({
  port: parseInt(process.env.PORT!, 10) || 4000,
  databaseUrl: process.env.DATABASE_URL!
});