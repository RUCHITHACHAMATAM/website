package com.whislist.wishlistms.dao;

import com.whislist.wishlistms.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductDao extends JpaRepository<Product,Integer> {
    Optional<Product> findByProductNameAndUsername(String productName,String username);
    List<Product> findByUsername(String username);

}
