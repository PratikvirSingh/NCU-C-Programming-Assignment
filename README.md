# NCU C Programming — CSL106N Platform Based Assignment 1

A static, responsive website containing C solutions for the question bank supplied with the NCU assignment.

## Contents
- `index.html` — website entry point
- `styles.css` — responsive visual design
- `app.js` — search, filters, modal, copy and download interactions
- `assets/questions.json` — 46 question entries and C programs
- `solutions/` — each program also provided as an individual `.c` source file, grouped by module
- `SOLUTION_INVENTORY.md` — complete solution checklist

## Run locally
Because the site loads `assets/questions.json` with `fetch`, run it through a local web server rather than opening `index.html` directly.

### Python
```bash
python -m http.server 8000
```
Then open http://localhost:8000

## Publish with GitHub Pages
1. Sign in to GitHub and create a **Public** repository (for example, `ncu-c-programming-assignment`).
2. Upload the contents of this folder to the repository root. Do not upload only the ZIP.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then click **Save**.
6. Wait for GitHub Pages to finish deploying. The site URL will be shown in the Pages section.
7. Open the URL in a private/incognito window and test the filters, code modal, copy button and mobile layout.
8. Submit that live website URL in the NCU assignment.

## Important academic notes
- The assignment PDF lists platform problem names and difficulty, but it does not reproduce every platform's complete statement or constraints.
- The first HackerEarth entry, “Read from STDIN, Write to STDOUT”, is presented as an input/output starter example (two integers and their sum). Confirm the exact assigned judge statement before treating it as a final judge answer.
- HackerEarth “Prime Numbers” is implemented as printing primes from 2 through n. Check the exact judge's required format.
- LeetCode entries are runnable standalone C programs for practice. LeetCode's native editor typically expects the named function rather than `main`; implementation notes identify the relevant function signature where applicable.
- Compile and test every program against the official statement and hidden constraints before using it in a graded submission.

## Compile a solution
```bash
gcc -std=c11 -Wall -Wextra -pedantic solution.c -o solution
./solution
```

## Source
Question titles, module structure, difficulty labels and the 16 custom pattern prompts are based on the supplied file “C Programming Practice Coding Platform Question Bank Set 1.pdf”.
