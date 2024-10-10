package com.dzomp.fullstack_backend.services;

import com.dzomp.fullstack_backend.exceptions.UserNotFoundException;
import com.dzomp.fullstack_backend.models.User;
import com.dzomp.fullstack_backend.repositories.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User  newUser(User user){
        return userRepository.save(user);
    }

    public User getUserById(Long id){

        return userRepository.findById(id).orElseThrow();
    }

    public User updateUser(Long id, User updateUser){
        return     userRepository.findById(id).map(user ->{
            user.setName(updateUser.getName());
            user.setUsername(updateUser.getUsername());
            user.setEmail(updateUser.getEmail());
            return userRepository.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
    }

    public String deleteUser(Long id){
        if(!userRepository.existsById(id)){
            throw  new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + "has been successfully deleted";
    }

    public Page<User> findAllUsers(Pageable pageable){
      return   userRepository.findAll(pageable);
    }
}
