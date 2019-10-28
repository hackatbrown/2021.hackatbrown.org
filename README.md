# Hack@Brown 2020 Site

## New to Development?

We will be using:

-   Git ([install](https://www.git-scm.com))
    -   [Git & GitHub Crash Course](https://www.youtube.com/watch?v=SWYqp7iY_Tc)
    -   _What is this?_
        -   Git is a version control system for managing a code repository. It
            allows us to track changes and revert to old versions of our project.
        -   GitHub is a platform online that lets us host our code.
    -   To verify that it works, open the terminal and type `git`.
        -   If it works, you should see a help menu printed out for you.
-   Node ([install](https://nodejs.org/en/))
    -   Pick the version "Recommended For Most Users".
    -   _What is this?_
        -   Node is a "JavaScript runtime." JavaScript was initially built solely
            for the browser. Node allows JS to be run on a computer (in a script for example).
    -   To verify that it works, open the terminal and type `node --version`.
        -   If it works, you should see the version number appear
-   Yarn ([install](https://yarnpkg.com/lang/en/))
    - _What is this?_
        - Yarn is a package manager for Node.js.
        - We will be using it to install other libraries and modules we'll need
            for our React app.
-   For your text editor, we recommend [VS Code](https://code.visualstudio.com).
    It's not necessary, but it has handy features that will help us during the
    development process.

## Installation and Usage

For this repository, make sure your node version is either 8.x, 10.x, or >=11.10.1.

In your terminal, [move to the directory](http://linuxcommand.org/lc3_man_pages/cdh.html)
you want the repo to be in and run `git clone https://github.com/hackatbrown/2020.hackatbrown.org.git`.

Then, run:

```
cd 2020.hackatbrown.org/client
yarn install
```

This will change directories into where the app lives, then install all dependencies.

Then, run `yarn start` and navigate to http://localhost:3000.

If you run into any setup issues, please let the Dev leads know, and we will address
it accordingly. Of course, always try to spend some time debugging first—it's
the best way to learn!

## Repository Layout

    .
    ├── src: where all the code lives
        ├─── assets: where images and data, are stored
            ├─── data: local data
                ├─── PageSpecificName: ex. Sponsorship
            ├─── images: contains all the images we use
                ├─── PageSpecificName: ex. Sponsorship
        ├─── components: where shared components between pages are stored
                ├─── ComponentName: ex. VideoComponent
        ├─── pages: where we specify each of the pages we are building
            ├─── PageName: ex SponsorshipPage
                ├─── components: the component for this specific page
                    ├─── ComponentName: ex. SponsorHome
                ├─── PageName: ex. SponsorshipPage
        ├─── utils: where we store common functions used
            ├── UtilName: ex. CalculateArea
    └──

Try to stick to the above layout and reference it
