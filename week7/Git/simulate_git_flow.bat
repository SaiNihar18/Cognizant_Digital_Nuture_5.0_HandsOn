@echo off
echo ==================================================
echo         Git Automated Lifecycle Simulation
echo ==================================================

if exist temp_repo rmdir /s /q temp_repo
mkdir temp_repo
cd temp_repo

echo [1] Initializing repository...
git init -b master
git config user.name "FSE Developer"
git config user.email "fse.dev@cognizant.com"

echo [2] Creating baseline file...
echo Hello FSE training baseline > notes.txt
git add notes.txt
git commit -m "initial commit on master"

echo [3] Branching out...
git checkout -b feature-branch
echo Hello FSE training baseline with feature additions > notes.txt
git add notes.txt
git commit -m "feature branch update"

echo [4] Modifying master on same line...
git checkout master
echo Hello FSE training baseline with master conflicts > notes.txt
git add notes.txt
git commit -m "conflicting commit on master"

echo [5] Attempting merge (conflict expected)...
git merge feature-branch

echo [6] Current conflicting content:
type notes.txt

echo [7] Resolving conflict...
echo Hello FSE training baseline with master conflicts resolved > notes.txt
git add notes.txt
git commit -m "resolved merge conflict manually"
git log --oneline

echo [8] Stashing simulation...
echo Temporary unstashed edit >> notes.txt
git stash
git stash list
git stash pop

echo [9] Clean simulation...
echo Untracked scrap content > garbage.tmp
git status -s
git clean -f
git status -s

cd ..
rmdir /s /q temp_repo
echo ==================================================
echo         Simulation completed successfully!
echo ==================================================
