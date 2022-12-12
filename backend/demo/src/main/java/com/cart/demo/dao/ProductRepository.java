package com.cart.demo.dao;

import com.cart.demo.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {

    Optional<Product> findByProductNameAndUsername(String productName,String username);
    List<Product> findByUsername(String username);
}
