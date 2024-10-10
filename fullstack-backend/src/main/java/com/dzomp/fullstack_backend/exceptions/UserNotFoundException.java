package com.dzomp.fullstack_backend.exceptions;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(Long id) {
        super("Could not find user with id " + id);

    }
}
