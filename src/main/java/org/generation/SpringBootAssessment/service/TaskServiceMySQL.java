package org.generation.SpringBootAssessment.service;

import org.generation.SpringBootAssessment.repository.TaskRepository;
import org.generation.SpringBootAssessment.repository.Entity.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class TaskServiceMySQL implements TaskService {

    private final TaskRepository taskRepository;

    public TaskServiceMySQL(@Autowired TaskRepository taskRepository)
    {
        this.taskRepository = taskRepository;
    }

    @Override
    public Task save(Task task)
    {
        return taskRepository.save(task);
    }

    @Override
    public List<Task> all()
    {
        List<Task> result = new ArrayList<>();
        taskRepository.findAll().forEach(result::add);
        return result;
    }
}
