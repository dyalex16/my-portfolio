---
title: "ShareBook"
summary: "A C++ OOP console application for a second-hand book marketplace, with a multi-level user hierarchy and SQLite persistence."
stack: ["C++", "SQLite", "OOP"]
liveUrl: ""
repoUrl: "https://github.com/dyalex16/sharebook"
image: "/projects/sharebook-cover.png"
featured: false
order: 2
---

## The Problem
A console-based marketplace for buying and selling second-hand books, built as a
course project focused on solid object-oriented design.

## Key Decisions
- Multi-level inheritance hierarchy: User → Customer → Buyer/Seller, User → Admin.
- Database class wrapping SQLite with method overloading for query variants.
- Refactored the book catalog from `vector<pair<int, Book*>>` to `vector<Book*>`
  for simpler ownership and lookup.

## Challenges
<!-- e.g. the linker error you were debugging on MSYS2 UCRT64 — once resolved,
     write up what caused it and how you fixed it. -->
