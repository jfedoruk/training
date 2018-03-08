package com.jsoft.codeswholesale.dto;

import lombok.Data;

import java.util.List;

@Data
public class Product {
    String identifier;
    List<String> languages;
    String name;
    String productId;
    List<Price> prices;
    Integer quantity;
    List<Image> images;
}
