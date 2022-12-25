const {Family} = require('../models')
const axios = require('axios')

exports.addFamily = async(req, res) => {
    try {
        let family_data = {
            name: req.body.name,
            assets: req.body.assets,
            gender: req.body.gender
        }
    
        if(req.body.father) {
            family_data.father = req.body.father
        }
    
        if(req.body.mother) {
            family_data.mother = req.body.mother
        }
    
        const createData = await Family.create(family_data)
        console.log(createData)
        
        res.json({
            status: 200,
            message: 'Created Successfully',
            data: createData
        })
    } catch(error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}

exports.updateFamily = async(req, res) => {
    try {
        const id = +req.params.id
        let updated_data = {
            name: req.body.name,
            assets: req.body.assets
        }
    
        if(req.body.father) {
            updated_data.father = req.body.father
        }
    
        if(req.body.mother) {
            updated_data.mother = req.body.mother
        }
        
        const update_data = await Family.update(updated_data, {
            where: {
                id
            }
        })

        res.json({
            status: 200,
            message: 'Data updated Successfully'
        })
    } catch(error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}

exports.deleteFamily = async(req, res) => {
    try {
        const id = +req.params.id
        const delete_family = await Family.destroy({
            where: {
                id
            }
        })

        res.json({
            status: 200,
            message: 'Deleted Successfully',    
        })
    } catch(error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}

exports.bulkDeleteFamily = async(req, res) => {
    try {
        const delete_family = await Family.destroy({where:{}})

        res.json({
            status: 200,
            message: 'Deleted Successfully',    
        })
    } catch(error) {
        res.json({
            status: 500,
            message: 'Internal server error',
            error_message: error.message
        })
    }
}

exports.showFamily = async(req, res) => {
    try {
        const getFamily = await Family.findAll()
        if(getFamily.length === 0) {
            res.json({
                status: 200,
                data: "Data not found"
            })
            return;
        }

        res.json({
            status: 200,
            data: getFamily
        })

    } catch(error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}

exports.assetsPriceFamily = async(req, res) => {
    try {
        const id = +req.params.id
    
        const get_asset = await Family.findByPk(id)
        
        let total_asset = 0
        async function getPrice() {
            if(get_asset.dataValues.assets === null) {
                return;
            }

            for(const eachAsset of get_asset.dataValues.assets) {
                await axios.get(`https://dummyjson.com/products/search?q=${eachAsset}`)
                .then(function (response) {
                    for(const eachProduct of response.data.products) {
                        total_asset = total_asset + eachProduct.price
                    }
                })
                .catch(function (error) {
                    // handle error
                    throw error
                })
            }
        }
        await getPrice()

        res.json({
            status: 200,
            data: {...get_asset.dataValues, total_asset: total_asset}
        })
    } catch(error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}