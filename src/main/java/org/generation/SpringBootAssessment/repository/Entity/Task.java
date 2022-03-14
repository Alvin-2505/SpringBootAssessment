package org.generation.SpringBootAssessment.repository.Entity;

import java.util.Date;

import org.generation.SpringBootAssessment.controller.dto.TaskDTO;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.GenerationType;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private Date date;

    public Task(){}

    public Task( TaskDTO taskDTO)
    {
        this.name = taskDTO.getName();
        this.description = taskDTO.getDescription();
        this.date = taskDTO.getDate();
    }

    public Integer getId(){
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    @Override
    public String toString()
    {
        return "Task{" + "id=" + id + ", name='" + name + '\'' + ", description='" + description + '\'' + ", date='" + date + '}';
    }
}
