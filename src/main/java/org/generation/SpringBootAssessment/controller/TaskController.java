package org.generation.SpringBootAssessment.controller;

import org.generation.SpringBootAssessment.controller.dto.*;
import org.generation.SpringBootAssessment.repository.Entity.Task;
import org.generation.SpringBootAssessment.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.util.*;
import org.springframework.web.bind.annotation.*;
import java.util.Date;


import java.io.*;

@RestController
@RequestMapping("/task")
public class TaskController
{
    private final TaskService taskService;

    public TaskController(@Autowired TaskService taskService)
    {
        this.taskService = taskService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Task> getTasks()
    {
        return taskService.all();
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save(  @RequestParam(name="name", required = true) String name,
                       @RequestParam(name="description", required = true) String description,
                       @RequestParam("date") Date date)
    {
        TaskDTO taskDto = new TaskDTO(name, description, date);
        taskService.save(new Task(taskDto));
    }
}
