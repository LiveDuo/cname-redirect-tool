const base32 = require('base32')
const apiRoot = process.env.NEXT_PUBLIC_API_ROOT
export default (req, res) => res.redirect(302, base32.decode(req.headers.host.split('.').slice(0,-apiRoot.split('.').length).join('')))
