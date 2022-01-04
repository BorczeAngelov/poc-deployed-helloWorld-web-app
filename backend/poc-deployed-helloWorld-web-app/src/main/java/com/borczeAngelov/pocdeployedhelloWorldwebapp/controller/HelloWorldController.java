package com.borczeAngelov.pocdeployedhelloWorldwebapp.controller;

import com.borczeAngelov.pocdeployedhelloWorldwebapp.model.PingServerRespone;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/helloworld/")
public class HelloWorldController {

    @GetMapping
    public PingServerRespone pingServer() {
        var message = "This is \"Hello world\" respone from server.";
        return new PingServerRespone(message);
    }
}