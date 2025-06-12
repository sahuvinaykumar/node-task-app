module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',      
      port: 3306,              
      user: 'root',            
      password: 'Vinay',            
      database: 'node_task',   
    },
    useNullAsDefault: true,
  },
};
