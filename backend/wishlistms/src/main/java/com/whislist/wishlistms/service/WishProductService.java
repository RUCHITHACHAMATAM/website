package com.whislist.wishlistms.service;

import com.whislist.wishlistms.dao.ProductDao;
import com.whislist.wishlistms.entity.Product;
import com.whislist.wishlistms.exception.ProductAlreadyExistException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WishProductService implements IWishProductService {

    @Autowired
    ProductDao dao;

    @Override
    public Product addProduct(Product product) throws Exception {
        Optional<Product> optional=dao.findByProductNameAndUsername(product.getProductName(),product.getUsername());
        if(optional.isPresent()){
//            throw new ProductAlreadyExistException("product already exist");
            return null;
        }
        Product saved=dao.save(product);
        return saved ;
    }


    @Override
    public void deleteProduct(int id) {
        Optional<Product> optional=dao.findById(id);
        if(optional.isPresent()){
            dao.delete(optional.get());
        }
    }




    @Override
    public List<Product> listOfProducts(String username)
    {

        List<Product> productList=dao.findByUsername(username);
        if(productList.size()==0)
        {
            return null;
        }
        return productList;
    }
}
