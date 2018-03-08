package com.jsoft.codeswholesale.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class Price {
    Integer from;
    Integer to;
    BigDecimal value;
}
