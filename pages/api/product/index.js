import connectDB from '../../../utils/connectDB';
import Products from '../../../models/productModel';

connectDB();

const productsFunc = async (req, res) => {
    switch(req.method) {
        case 'GET':
            await getProducts(req, res);
            break;
    }
}

const getProducts = async (req, res) => {
    try {

        const products = await Products.find();
        res.json({
            status: 'success',
            result: products.length,
            products
        })

    } catch(err) {
        res.status(500).json({ err: err.message })
    }
}

export default productsFunc;