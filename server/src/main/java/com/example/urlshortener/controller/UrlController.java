package com.example.urlshortener.controller;

import com.example.urlshortener.model.UrlEntry;
import com.example.urlshortener.service.UrlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UrlController {

    private final UrlService urlService;

    @Autowired
    public UrlController(UrlService urlService) {
        this.urlService = urlService;
    }

    @PostMapping("/shorten")
    public ResponseEntity<String> shortenUrl(@RequestBody UrlEntry urlEntry) {
        String shortUrl = urlService.shortenUrl(urlEntry.getOriginalUrl());
        return new ResponseEntity<>(shortUrl, HttpStatus.CREATED);
    }

    @GetMapping("/{shortKey}")
    public ResponseEntity<String> redirectToOriginalUrl(@PathVariable String shortKey) {
        String originalUrl = urlService.getOriginalUrl(shortKey);
        if (originalUrl == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.status(HttpStatus.MOVED_PERMANENTLY).header("Location", originalUrl).build();
    }

    @GetMapping("/urls")
    public ResponseEntity<List<UrlEntry>> getUrls() {
        List<UrlEntry> allUrls = urlService.getUrls();

        // Return the list of URLs with a 200 (OK) status code
        return ResponseEntity.ok(allUrls);
    }
}
