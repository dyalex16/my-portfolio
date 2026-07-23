---
title: "SkillSwap"
summary: "A full-stack skill-exchange platform matching people to teach and learn from each other, using skill overlap and geographic proximity."
stack: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma", "Socket.io", "Jitsi Meet"]
liveUrl: "https://skillswap-five-nu.vercel.app/" 
repoUrl: "https://github.com/dyalex16/skillswap"
image: "/projects/skillswap-cover.png"
featured: true
order: 1
---

## The Problem
Most "learn a skill" platforms are one-directional — you pay someone to teach you.
SkillSwap flips that by matching people based on complementary skills (what you can
teach vs. what you want to learn) and physical proximity, so exchanges can happen
locally and for free.

## Key Decisions
- Custom matchmaking algorithm combining skill overlap scoring with the Haversine
  formula for geographic proximity, instead of a third-party geolocation API.
- Facebook-style match/friend-request flow so users opt in before contact.
- Socket.io for real-time chat, JWT-authenticated per connection.
- Jitsi Meet integration for in-app video calls without leaving the platform.

## Challenges
- Experienced difficulties with the avatar upload correlation at all visual points.
- Numerous attempts to accurately render suggestions based on sender, receiver or declined status. 

## What I'd Improve Next
- AI integrated suggestions for matches and chat starters.
- Paginate match queries as the user base grows
- Push notifications for new matches/messages
