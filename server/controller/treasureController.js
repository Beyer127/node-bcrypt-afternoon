module.exports = {
    dragonTreasure: (req,res) => {
        const treasure = await 
        req.app.get('db').get_dragon_treasure(1)
        return res.status(200).send(treasure)
    },

    getUserTreasure: (req,res) => {
        const userTreasure = await
        req.app.get('db').get_user_treasure([req.session.user.id])
        return res.status(200).send(userTreasure)
    },

    addUserTreasure: (req,res) => {
        const {treasureUrl} = req.body;
        const {id} = req.session.user;
        const userTreasure = await
        req.app.get('db').add_user_treasure([treasureUrl, id])
        return res.status(200).send(userTreasure)
    },

    getAllTreasure: (req,res) => {
        const getAllTreasure = await 
        req.app.get('db').get_all_treasure()
        return res.status(200).send(getAllTreasure)
    }
}