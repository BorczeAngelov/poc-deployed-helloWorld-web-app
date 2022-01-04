package com.borczeAngelov.pocdeployedhelloWorldwebapp.controller;

import java.time.LocalTime;

import com.borczeAngelov.pocdeployedhelloWorldwebapp.model.PingServerRespone;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/helloworld/")
public class HelloWorldController {

    @GetMapping
    public PingServerRespone pingServer() {
        var message = "This is ping-pong respone from server. LocalTime = " + LocalTime.now();
        return new PingServerRespone(message);
    }
}