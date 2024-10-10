package com.dzomp.fullstack_backend.controllers;

import com.dzomp.fullstack_backend.exceptions.UserNotFoundException;
import com.dzomp.fullstack_backend.models.User;
import com.dzomp.fullstack_backend.repositories.UserRepository;
import com.dzomp.fullstack_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/super")
public class UserController {



    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/user")
    User newUser(@RequestBody User user){

        return userService.newUser(user);
    }


    @GetMapping("/users")
    Page<User> getAlUsers( @PageableDefault(size = 10, page = 0) Pageable pageable
){
          return userService.findAllUsers(pageable);

    }


    @GetMapping("/users/{id}")
    User getUserById(@PathVariable Long id){
         return   userService.getUserById(id);
    }


    @PutMapping("/users/{id}")
    User updateUser(@PathVariable Long id, @RequestBody User updateUser){

        return  userService.updateUser(id, updateUser);
    }


    @DeleteMapping("/user/{id}")
     String deleteUser(@PathVariable Long id){
        return userService.deleteUser(id);
    }








                    
}
