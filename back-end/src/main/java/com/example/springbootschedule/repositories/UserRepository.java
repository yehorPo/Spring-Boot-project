package com.example.springbootschedule.repositories;

import com.example.springbootschedule.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
