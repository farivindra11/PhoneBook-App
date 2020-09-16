const{GraphQLNonNull,GraphQLID,GraphQLString}=require('graphql')
const { userType } = require('../types/user');
const services = require('../../services');

exports.update = {
  type: userType,
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
    return services.updateUser(params)
  }
}