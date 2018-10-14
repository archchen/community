print( '\n>>>>>>>>>>>>>>>>>>>>> Begin creating  db users and database >>>>>>>>>>>>>>>>>\n' );
function getConfig() {
  const PATH = '/etc/nodebb/configs.json';
  const configs = JSON.parse(cat(PATH));
  return configs;
}

function initUsers() {
    const mongodbConfig = getConfig();
    const adminUserName = mongodbConfig['admin']['username'];
    const adminUserPassword = mongodbConfig['admin']['password'];
    const admin = db.getSiblingDB( 'admin' );
    if (!admin.getUser(adminUserName)) {
        admin.createUser({
            user: adminUserName,
            pwd: adminUserPassword,
            roles: [
              {role: 'userAdminAnyDatabase', db: 'admin'},
              { role: "readWriteAnyDatabase", db: "admin" }
            ]
        });
    } else {
        print('User "' + adminUserName + '" of "admin" already exists');
    }

    admin.auth(adminUserName, adminUserPassword);
    const dbUser = mongodbConfig['user'];
    const dbPwd = mongodbConfig['password'];
    const dbName = 'nodebb';
    const users = db.getSiblingDB(dbName);
    if (!users.getUser(dbUser)) {
        users.createUser({
            user: dbUser,
            pwd: dbPwd,
            roles: [{role: "readWrite", db: dbName}, {role: 'clusterMonitor', db: 'admin'}]
        });
    } else {
        print('User "' + dbUser + '" of "' + dbName + '" already exists');
    }
}

initUsers();

print( '\n>>>>>>>>>>>>>>>>>>>>> Create db users and database finish >>>>>>>>>>>>>>>>>\n' );
