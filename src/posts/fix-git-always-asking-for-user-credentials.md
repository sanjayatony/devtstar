---
title: Fix Git always asking for user credentials
date: 2022-05-20
tags:
  - git
---

This happened because you are clone the repo using HTTPS.

To fix this you should clone it using SSH. For the repo that already cloned using HTTPS, you should change the URL of origin remote.

```
git remote set-url origin git@github.com:username/repo.git
```


 

