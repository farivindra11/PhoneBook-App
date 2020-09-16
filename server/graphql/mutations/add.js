const{GraphQLNonNull,GraphQLString,GraphQLID, GraphQLInt}=require('graphql')
var UserType = require('../types/user');
var services = require('../../services');

exports.add = {
  type: UserType.userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    Name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    Phone: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    return services.createUser(params);
  }
}