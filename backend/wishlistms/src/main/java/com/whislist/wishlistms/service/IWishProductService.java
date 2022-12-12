package com.whislist.wishlistms.service;

import com.whislist.wishlistms.entity.Product;

import java.util.List;

public interface IWishProductService {
    Product addProduct(Product product) throws Exception;

    void deleteProduct(int id);

    List<Product> listOfProducts(String username);

}
