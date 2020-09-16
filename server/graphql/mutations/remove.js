const{GraphQLNonNull,GraphQLID}=require('graphql')
var services = require('../../services');
const { userType } = require('../types/user');

exports.remove = {
    type: userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        return services.deleteUser(params);
    }
}