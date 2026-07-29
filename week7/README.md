# Week 7: Platforms, DevOps, Docker & Git Automation

This directory contains the hands-on implementation of Platforms training modules covering Git, DevOps, CI/CD, Containerization, Cloud, and GenAI.

## Directory Structure

* **[Git/](./Git/)**: Contains `simulate_git_flow.bat` which automates:
  - Initializing local Git workspaces.
  - Branching and checkout.
  - Generating and resolving merge conflicts.
  - Stashing, popping, and directory cleaning.
* **[Docker/](./Docker/)**: Contains:
  - `Dockerfile`: Multi-stage build compilation and server serving.
  - `docker-compose.yml`: Multi-container service definitions.
* **[CI-CD/](./CI-CD/)**: Contains `github-action-ci.yml` defining automated build jobs for Java Maven and React npm.
* **[Cloud-GenAI/](./Cloud-GenAI/)**: Contains `reference_guide.md` specifying cloud microservice topologies (AWS/Azure) and prompting formats.

---

## How to Run Git Simulation

Run the automated script in cmd:
```cmd
cd Git
simulate_git_flow.bat
```
The output logs will trace repository init, checkout, conflicts resolution, stashing, and directory cleaning.
