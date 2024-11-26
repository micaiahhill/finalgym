package com.example.h2_demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api")
public class SqlQueryController {

    private JdbcTemplate jdbcTemplate;

    @PostMapping("/executeSql")
    public List<Map<String, Object>> executeSql(@RequestBody Map<String, String> body) {
        String sql = body.get("sql");
        System.out.println("Executing SQL query: " + sql);  // Log the query
        try {
            List<Map<String, Object>> result = jdbcTemplate.queryForList(sql);
            System.out.println("Query result: " + result);  // Log the result
            return result;
        } catch (Exception e) {
            System.out.println("Error executing SQL: " + e.getMessage());
            return List.of(Map.of("error", "Invalid SQL query"));
        }
    }
}
