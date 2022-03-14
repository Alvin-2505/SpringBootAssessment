package org.generation.SpringBootAssessment.service;

import org.generation.SpringBootAssessment.repository.Entity.Task;

import java.util.List;

public interface TaskService {
    Task save (Task task);

    List<Task> all();
}
