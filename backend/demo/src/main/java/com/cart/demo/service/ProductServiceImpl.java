package com.cart.demo.service;


import com.cart.demo.dao.ProductRepository;
import com.cart.demo.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements IProductService{

    @Autowired
    ProductRepository dao;




    @Override
    public Product addProduct(Product product) {
        Optional<Product> optional=dao.findByProductNameAndUsername(product.getProductName(),product.getUsername());
        if(optional.isPresent())
        {
            Product product1=optional.get();
            int quantity=product1.getQuantity();
            quantity+=1;
            product1.setQuantity(quantity);
            return dao.save(product1);
        }
        Product saved=dao.save(product);
        return saved ;
    }

    @Override
    public void deleteProduct(int id) {
        Optional<Product> optional=dao.findById(id);
        if(optional.isPresent() && optional.get().getQuantity()==1)
        {

            dao.delete(optional.get());
//            return "Product deleted successfully";
        }
        else if(optional.get().getQuantity()>1)
        {
            Product product=optional.get();
            int quantity=product.getQuantity();
            quantity-=1;
            product.setQuantity(quantity);
            dao.save(product);
//            return "Quantity Updated";
        }
//        return null;
    }
    public List<Product> productListByUsername(String username)
    {
        List<Product> list=dao.findByUsername(username);
        if(list.size()==0)
        {
            return null;
        }
        return list;
    }

    @Override
    public List<Product> listOfProducts(String username)
    {
        List<Product> list=productListByUsername(username);
//        List<Product> productList=dao.findAll();
//        if(productList.size()==0)
//        {
//            return null;
//        }
        return list;
    }
}
