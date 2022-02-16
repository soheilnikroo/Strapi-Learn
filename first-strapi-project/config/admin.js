module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b9334659b7e756ff85915e2b9b0c4ab5'),
  },
});
