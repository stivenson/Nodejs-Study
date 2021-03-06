var Config = {
    plugins : [
        {
            register: require('hapi-auth-jwt2')
        },
        {
            register: require('hapi-mysql'),
            options: {
              host: 'localhost',
              database: 'hapimysql',
              user: 'root',
              password: 'root'
            }
        },
        {
            register: require('hapi-authorization'),
            options: {
              roles: ['ADMIN', 'MANAGER', 'EMPLOYEE']  // By setting to false, you are not using an authorization hierarchy and you do not need to specify all the potential roles here 
            }
        }
    ]
}

module.exports = Config;
