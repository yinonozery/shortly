package com.example.urlshortener.service;

import com.example.urlshortener.model.UrlEntry;
import com.example.urlshortener.repository.UrlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.google.common.hash.Hashing;

import java.nio.charset.StandardCharsets;

@Service
public class UrlService {

    private final UrlRepository urlRepository;

    @Autowired
    public UrlService(UrlRepository urlRepository) {
        this.urlRepository = urlRepository;
    }


    public String shortenUrl(String originalUrl) {
        // Generate a new shortKey
        String shortKey = Hashing.murmur3_32_fixed().hashString(originalUrl, StandardCharsets.UTF_8).toString();

        // Check if an entry with the same originalUrl already exists
        UrlEntry existingUrlEntry = this.urlRepository.findByShortKey(shortKey);
        if (existingUrlEntry != null) {
            // Return the existing shortKey if the entry already exists
            return shortKey;
        }

        // Create a new UrlEntry
        UrlEntry urlEntry = new UrlEntry(originalUrl, shortKey);

        // Save the new UrlEntry
        this.urlRepository.save(urlEntry);

        return shortKey;
    }

    public String getOriginalUrl(String shortKey) {
        UrlEntry urlEntry = this.urlRepository.findByShortKey(shortKey);
        if (urlEntry != null) {
            if (urlEntry.isExpired()) {
                urlRepository.deleteById(urlEntry.getUUID());
                return null;
            }
            urlRepository.incrementClickCount(shortKey);
            return urlEntry.getOriginalUrl();
        }

        return null;
    }

    public List<UrlEntry> getUrls() {
        return urlRepository.findAll();
    }

}
