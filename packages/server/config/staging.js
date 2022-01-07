require('dotenv').config()

module.exports = {
  API_CONFIG: {
    api: {
      sessionOptions: {
        cookieName: process.env.COOKIE_NAME || 'drecruit-session-staging',
        key: process.env.COOKIE_KEY,
        cookie: {
          // options for setCookie, see https://github.com/fastify/fastify-cookie
          domain: process.env.DOMAIN,
          secure: true,
          httpOnly: true,
          sameSite: 'Lax',
          path: '/',
          maxAge: 144 * 60 * 60 // 6 days
        }
      }
    }
  }
}
