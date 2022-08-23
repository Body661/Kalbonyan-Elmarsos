const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51LZJyVKuUHTnXWlHKCs6WTeqfkZw5BPwSmPPIvFM7dRdJqA2ZiO0HBWdirjzOenz7mq7AJ2g5uA4FLbUhoACi9RH00KjN4WMh9",
    SENTRY_DSN: "https://9c7d46a8d0b240b68b36da2305b60b1d@o1374010.ingest.sentry.io/6681099",

    // Backend config
    s3: {
        REGION: process.env.REACT_APP_REGION,
        BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
        REGION: process.env.REACT_APP_REGION,
        URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
        REGION: process.env.REACT_APP_REGION,
        USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
        APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
        IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
};

export default config;