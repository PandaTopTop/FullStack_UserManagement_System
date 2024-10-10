package com.dzomp.fullstack_backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class UserNotFoundAdvice {

    @ExceptionHandler(UserNotFoundException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> exceptionHandler(UserNotFoundException foundException){
        Map<String,String> errors = new HashMap<>();
        errors.put("errorMessage",foundException.getMessage());
        return errors;
    }
}
