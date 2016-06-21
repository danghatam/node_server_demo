The reservations API functions as an abstract reservation service. You can tell it to keep track of the schedule of anything you want. So long as it has a schedule, it can handle it.

## Tech

* A relational database: postgres TODISCUSS.. see #2
* Nodejs
* Expressjs

## Authentication

* Every call to the API should be accompanied by an authentication token like with Drops-web. No user authentication is needed

## Development

* We'll use [GitLab flow](http://docs.gitlab.com/ee/workflow/gitlab_flow.html) on this one instead of Git Flow. Please follow the rules that are explained in the linked documentation. More info below.
* We use eslint run `npm run lint` before committing and fix any errors it gives
* Keep the tests green, check them with `npm run test`
* Refer to issue numbers in your commits, this makes crosse refencing between issues and commits easier.
* You are free to merge a feature branch to master if the build is succeeding (e.g. tests and linting).
* When implementing an endpoint, first write a test that calls that endpoint and that uses some test data. Do not only check return codes but also check the returned data content.

## GitLab flow

We'll have three main branches `master`, `staging`, and `production`. Development happens in `feature/feature-x` branches that are based on master (or another feature branch). More info on gitlab flow [here](http://docs.gitlab.com/ee/workflow/gitlab_flow.html).