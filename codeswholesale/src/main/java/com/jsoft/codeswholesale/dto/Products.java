package com.jsoft.codeswholesale.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class Products {

    @JsonProperty("items")
    List<Product> products;
}
