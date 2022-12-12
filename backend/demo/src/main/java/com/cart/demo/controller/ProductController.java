package com.cart.demo.controller;


import com.cart.demo.entity.Product;
import com.cart.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RequestMapping("/cart")
@RestController
public class ProductController {

    @Autowired
    IProductService service;

    @PostMapping("addProduct")
    public Product addProduct(@RequestBody Product product)
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
