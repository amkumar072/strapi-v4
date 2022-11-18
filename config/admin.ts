export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});

// 9b7c6aa42651f27beb739d3d26eb85d69e356bbf60e6f6940b0f86e2e593b15fbb878cd9d26cad6b66029f3fae35e5164e25bdb964302ab64bf19730c96db2952a67ed7ec0ba67259ccd9e9172b6a9f7c76161d93e5e5b9de42b74bc0f457c33a3867df46bd698b2d11b6e0cac8f8dbcb555cf94781cecd9ceb82c9b3f0ad4a1
