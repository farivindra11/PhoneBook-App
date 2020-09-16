
const {GraphQLInputObjectType, GraphQLInt}  = require('graphql');

const PaginationArgType = new GraphQLInputObjectType({
    name: 'PaginationArg',
    fields: {
      offset: {
        type: GraphQLInt,
        description: "Skip n data."
      },
      limit: {
        type: GraphQLInt,
        description: "result data"
      },
    }
  })
  
  module.exports = PaginationArgType