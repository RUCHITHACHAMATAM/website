package com.cart.demo.service;

import com.cart.demo.entity.Product;

import java.util.List;

public interface IProductService {

    Product addProduct(Product product);

    void deleteProduct(int id);

    List<Product> listOfProducts(String username);


}
