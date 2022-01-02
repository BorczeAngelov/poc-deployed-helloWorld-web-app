package com.borczeAngelov.pocdeployedhelloWorldwebapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/helloworld/")
public class HelloWorldController {

    @GetMapping
    public String pingServer() {
        return "This is \"Hello world\" respone from server.";
    }
}