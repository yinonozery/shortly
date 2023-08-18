package com.example.urlshortener.repository;

import com.example.urlshortener.model.UrlEntry;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface UrlRepository extends JpaRepository<UrlEntry, UUID> {
    UrlEntry findByShortKey(String shortKey);

    @Transactional
    @Modifying
    @Query("UPDATE UrlEntry u SET u.clickCount = u.clickCount + 1 WHERE u.shortKey = ?1")
    void incrementClickCount(String shortKey);


    List<UrlEntry> findAll();
}