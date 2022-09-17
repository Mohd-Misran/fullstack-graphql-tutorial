const createUserModel = (db) => {

    const findOne = () => {
        return db.data.user;
    };

    return { findOne };
};

export default createUserModel
