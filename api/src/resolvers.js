/* 
A resolver can optionally accept four positional arguments: (parent, args, context, info)
*/

const resolvers = {
    Query: {
        user: (_, __, { models }) => {
            return models.User.findOne();
        },
        getShoeById: (_, { id }, { models }) => {
            const shoe = models.Shoe.findById(id);
            return shoe;
        },
        listShoes: (_, { filter }, { models }) => {
            const shoes = models.Shoe.find(filter);
            return shoes;
        },
    },
    Mutation: {
        createShoe: (_, { input }, { models }) => {
            const shoe = models.Shoe.create(input);
            return shoe;
        },
    },
    Shoe: {
        img: (_) => "https://api.lorem.space/image/shoes?w=150&h=150",
    },
};

export default resolvers;
