package com.example.urlshortener.model;

import java.time.LocalDate;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import jakarta.persistence.*;

@Entity
@Table(name = "urls")
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class UrlEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // Use the appropriate strategy
    private UUID id;

    @Column(name = "original_url")
    private String originalUrl;

    @Column(name = "short_key")
    private String shortKey;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "expires_at")
    private LocalDate expiresAt;

    @Column(name = "click_count")
    private int clickCount;

    public UrlEntry() {
        // Default constructor required by JPA
    }

    public UrlEntry(String originalUrl, String shortKey) {
        this.originalUrl = originalUrl;
        this.shortKey = shortKey;
        this.createdAt = LocalDate.now();
        this.expiresAt = LocalDate.now().plusYears(1);
        this.clickCount = 0;
    }

    public String getOriginalUrl() {
        return originalUrl;
    }

    public UUID getUUID() {
        return this.id;
    }

    public boolean isExpired() {
        return !LocalDate.now().isBefore(this.expiresAt);
    }
}
