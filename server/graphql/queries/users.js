const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql')
const { getUsers, searchUsers } = require('../../services')
const { userType } = require('../types/user')
const PaginationArgType = require('../types/pnParams')
const PaginatedListType = require('../types/pnOutput')

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      users: {
        type: new PaginatedListType(userType),
        args: {
          name: { type: GraphQLString },
          phone: { type: GraphQLString },
          pagination: {
            type: PaginationArgType,
            defaultValue: { offset: 0, limit: 5 }
          },
        },
        resolve: async (root, args) => {
          const { name, phone, pagination: { offset, limit } } = args

          if (name || phone) {
            const data = await searchUsers(name, phone, offset, limit)
            return {
              items: data.list,
              result: data.result
            }
          }
        }
      }
    }
  }
});