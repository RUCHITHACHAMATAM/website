package com.whislist.wishlistms.controller;

import com.whislist.wishlistms.entity.Product;
import com.whislist.wishlistms.service.IWishProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class WishController {

    @Autowired
    IWishProductService service;

    @PostMapping("addProduct")
    public Product addProduct(@RequestBody Product product) throws Exception
    {
        return service.addProduct(product);
    }

    @DeleteMapping("deleteProduct/{id}")
    public void deleteProduct(@PathVariable int id)
    {
        service.deleteProduct(id);
    }

    @GetMapping("productList/{username}")
    public List<Product> listOfAllProducts(@PathVariable String username)
    {
        return service.listOfProducts(username);
    }
}
