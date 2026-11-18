# novanfs.my.id

Personal portfolio site. Static HTML and CSS, hosted on Cloudflare Pages.

## How it works

- Code lives in this repo. `main` is the production branch.
- Every pull request runs CI (GitHub Actions): HTML lint (HTMLHint) and secret scan (Gitleaks).
- `main` is protected: changes go through a pull request, and the required checks must pass before merge.
- Cloudflare Pages builds a preview for every pull request (staging) and deploys `main` to production.

## Deploy

1. Create a branch from `main`, make the change, push it.
2. Open a pull request. Wait for the CI checks to pass.
3. Open the Cloudflare preview URL from the bot comment and check the page.
4. Merge. Cloudflare Pages deploys `main` to https://novanfs.my.id automatically.

## Rollback

Fast (seconds), when production is broken:

1. Cloudflare dashboard > Workers & Pages > novanfs-my-id > Deployments.
2. Find the previous Production deployment (check the commit hash in Source).
3. Click ... > Rollback to this deployment.

Permanent fix, after the site is safe:

1. Find the bad commit: `git log --oneline`.
2. On a new branch: `git revert --no-edit <commit>`.
3. Push, open a pull request, merge after CI passes.

Note: a Cloudflare rollback alone does not change `main`. The next merge would deploy the bad change again, so always follow up with `git revert`.