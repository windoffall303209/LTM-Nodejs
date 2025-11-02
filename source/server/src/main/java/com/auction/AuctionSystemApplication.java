package com.auction;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AuctionSystemApplication {
    public static void main(String[] args) {
        SpringApplication.run(AuctionSystemApplication.class, args);
        System.out.println("Auction System Server đã khởi động tại http://localhost:8000");
    }
}

