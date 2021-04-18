# Timed Goals VSCode Extension

## Inspiration

We were inspired by the Pomodoro Technique for time management.

## How we built it
We built this VSCode extention using Npm, ReactJS, and the VSCode API.
* React: We used ReactJS for the front-end webview where the user is able to see all of their todos and fill out a form to create another todo.
* JavaScript / VSCode API: We used vanilla Javascript and the VSCode API to build out the backend of this extension. After a user made a change on the front-end, we stored and persisted state data and the list of tasks remaining to complete in the VSCode backend.
* NPM: NPM was our package manager for this project. It kept our dependencies and external packages and modules organized and usable throughout development.


## Challenges we ran into

* Working with a new framework or language always comes with it's challenges. For our team, this meant spending hours researching the VSCode and ReactJS documentation looking for the solutions to the enumerable erros we recieved while developing this project. Specifically, we ran into particular trouble when trying to compile and link our ReactJS webview to our VSCode backend. We eventually found out that there was a way to precompile the React.js code so that it would run _inside of_ our webview.

## What we learned
* Everyone on our team recieved a venerable crash-course in the ins and outs of VSCode extension development. No one on our team had ever worked on VSCode extentions before, and challenging ourselves to create something useful with this technology in under 24 hours forced us to learn as much as we could as quickly as we could. We learned how to launch webviews, create commands accessible via the VSCode command palate, and how to synchronize our project files with Git and GitHub.


## Accomplishments that we're proud of

* This is the first time any of us have worked on a VSCode extension, so getting as far as we did was a great surprise, as well as an invaluable lesson in persistence and the strength of a good team.
* We're proud of our division of labor and how everyone on our team found way to contribute and add to the final project. Everyone on our team had a part to play, and we came together, with all our Readme contributions and git-commits, to create something that none of us had ever done before. We're proud to have worked on something that we truly feel has a use in the developer community, and hope you have as much fun using our extension as we had making it.


## What's next for Timed Goals


## Built With
Javascript, Node.js, React, NPM

## Try it out
* [GitHub Repo](https://github.com/chenmasterandrew/timed-goals)
* [Visual Studio Marketplace]()



-----------------------------------------------------------------------------------------------------------

## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets
